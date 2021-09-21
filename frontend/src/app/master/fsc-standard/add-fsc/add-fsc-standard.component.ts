import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,FormArray } from '@angular/forms';
import { FscStandardService } from '@app/services/master/fsc-standard/fsc-standard.service';
import { ErrorSummaryService } from '@app/helpers/errorsummary.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-fsc-standard',
  templateUrl: './add-fsc-standard.component.html',
  styleUrls: ['./add-fsc-standard.component.scss']
})
export class AddFscStandardComponent implements OnInit {
  title = 'Add FSC Standard';
  btnLabel = 'Save';
  form : FormGroup;
  loading = false;
  buttonDisable = false;
  error:any;
  submittedError = false;
  typeErrors='';
  success:any;
  standard_type = '';
  nameErrors = '';
  codeErrors = '';
  short_codeErrors = '';
  constructor(private router: Router,private fb:FormBuilder,private standardService:FscStandardService,private errorSummary: ErrorSummaryService) { }

  ngOnInit() {
    this.form = this.fb.group({
	  name:['',[Validators.required, this.errorSummary.noWhitespaceValidator, Validators.maxLength(255), Validators.pattern("^[a-zA-Z \'\-().,]+$")]],
	  code:['',[Validators.required, this.errorSummary.noWhitespaceValidator, Validators.maxLength(25), Validators.pattern("^[a-zA-Z0-9]+$")]],
	  short_code:['',[Validators.required, this.errorSummary.noWhitespaceValidator, Validators.maxLength(5), Validators.pattern("^[a-zA-Z0-9]+$")]],
	  version:['',[Validators.required, this.errorSummary.noWhitespaceValidator,Validators.pattern("^[0-9]+(.[0-9]{0,2})?$"),Validators.maxLength(10),Validators.min(1)]],
    license_number:['',[Validators.required, this.errorSummary.noWhitespaceValidator, Validators.maxLength(255)]],
    priority:['',[Validators.required,Validators.maxLength(5), Validators.pattern("^[0-9]+$")]],
	  description:['',[this.errorSummary.noWhitespaceValidator]]
    });
  }

  get f() { return this.form.controls; }
  
  
  onSubmit(){
    
	//console.log('--'+this.f.type.value);

		
    if (this.form.valid) 
	  {      
	  
	  this.typeErrors='';
		
      this.loading = true;

      // console.log(this.form.value);
      
      this.standardService.addData(this.form.value)
      .pipe(
        first()        
      )
      .subscribe(res => {
        //console.log(res);
          if(res.status){
			this.success = {summary:res.message};
			this.buttonDisable=true;
			setTimeout(()=>this.router.navigate(['/master/fsc-standard/list-fsc']),this.errorSummary.redirectTime);
          }else if(res.status == 0){
            this.error = {summary:this.errorSummary.getErrorSummary(res.message,this,this.form)};				      
          }else{			      
            this.error = {summary:res};
          }
          this.loading = false;
         
      },
      error => {
          this.error = {summary:error};
          this.loading = false;
      });
      //console.log('sdfsdfdf');
    } else {
      this.error = {summary:this.errorSummary.errorSummaryText};
      this.errorSummary.validateAllFormFields(this.form); 
      
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,FormArray } from '@angular/forms';
//import { StandardService } from '@app/services/master/standard/standard.service';
import { ErrorSummaryService } from '@app/helpers/errorsummary.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FscSubStandard } from '@app/models/master/FscSubStandard';

import {FscSubStandardService} from '@app/services/master/fscsubstanard/fscsubstandard.service';
@Component({
  selector: 'app-add-fsc-sub-standard',
  templateUrl: './add-fsc-sub-standard.component.html',
  styleUrls: ['./add-fsc-sub-standard.component.scss']
})
export class AddFscSubStandardComponent implements OnInit {

 title = 'Add FSC Sub Standard';
  btnLabel = 'Save';
  form : FormGroup;
  loading = false;
  buttonDisable = false;
  error:any;
  submittedError = false;
  typeErrors='';
  success:any;
  //standard_type''; = 
  nameErrors = '';
  codeErrors = '';
  short_codeErrors = '';
  fscStandardList: any;
  
  constructor(private router: Router,private fb:FormBuilder,private standardService:FscSubStandardService,private errorSummary: ErrorSummaryService) { }

  ngOnInit() {
	this.form = this.fb.group({
     
    sub_standard_type:['',[Validators.required]],
	  name:['',[Validators.required, this.errorSummary.noWhitespaceValidator, Validators.maxLength(255)]],
	  code:['',[Validators.required, this.errorSummary.noWhitespaceValidator, Validators.maxLength(25), Validators.pattern("^[a-zA-Z0-9]+$")]],
	  short_code:['',[Validators.required, this.errorSummary.noWhitespaceValidator, Validators.maxLength(5), Validators.pattern("^[a-zA-Z0-9]+$")]],
	  version:['',[Validators.required, this.errorSummary.noWhitespaceValidator,Validators.pattern("^[0-9]+(.[0-9]{0,2})?$"),Validators.maxLength(10),Validators.min(1)]],
    priority:['',[Validators.required,Validators.maxLength(5), Validators.pattern("^[0-9]+$")]],
      });

      this.standardService.getStandardList().subscribe(res =>{
        this.fscStandardList = res["standards"];
      })
  }

  get f() { return this.form.controls; }
  
  
  onSubmit(){
    
	//console.log('--'+this.f.type.value);
	
		
    if (this.form.valid) 
	{      
	  
		
      this.loading = true;
      
      this.standardService.addData(this.form.value)
      .pipe(
        first()        
      )
      .subscribe(res => {
        //console.log(res);
          if(res.status){
			this.success = {summary:res.message};
			this.buttonDisable=true;
			setTimeout(()=>this.router.navigate(['/master/fsc-sub-standard/list']),this.errorSummary.redirectTime);
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,FormArray } from '@angular/forms';
import { FscProductService } from '@app/services/master/fsc-product/fsc-product.service';
import { ErrorSummaryService } from '@app/helpers/errorsummary.service';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-fsc-product',
  templateUrl: '../add-fsc-product/add-fsc-product.component.html',
  styleUrls: ['./edit-fsc-product.component.scss']
})
export class EditFscProductComponent implements OnInit {
  title = 'Edit FSC Product';
  btnLabel = 'Update';
  form : FormGroup;
  loading = false;
  buttonDisable = false;
  error:any;
  id:number;
  success:any;
  submittedError = false;
  nameErrors ='';
  codeErrors = '';
  descriptionErrors= '';
  constructor(private activatedRoute:ActivatedRoute,private router: Router,private fb:FormBuilder,private fscproductService: FscProductService,private errorSummary: ErrorSummaryService) { }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.queryParams.id;
      
      this.form = this.fb.group({
        id:[''],
        name:['',[Validators.required, this.errorSummary.noWhitespaceValidator, Validators.maxLength(255),Validators.pattern("^[a-zA-Z0-9 \'\-+%/&,().-]+$")]],
      code:['',[Validators.required, this.errorSummary.noWhitespaceValidator, Validators.maxLength(50),Validators.pattern("^[a-zA-Z0-9 \'\-+%/&,().-]+$")]],
        description:['',[this.errorSummary.noWhitespaceValidator]],  
      });
  
      this.fscproductService.getProduct(this.id).pipe(first())
      .subscribe(res => {
        let audittype = res.data;
      
        this.form.patchValue(audittype);
      },
      error => {
          this.error = error;
          this.loading = false;
      });
    }
    
    get f() { return this.form.controls; }
    
    onSubmit(){
      
      if (this.form.valid) {
          this.loading = true;      
      this.fscproductService.updateData(this.form.value).pipe(first()
        ).subscribe(res => {
  
            if(res.status){
              this.success = {summary:res.message};
        this.buttonDisable = true;
        setTimeout(()=>this.router.navigate(['/master/fsc-product/list']),this.errorSummary.redirectTime);
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

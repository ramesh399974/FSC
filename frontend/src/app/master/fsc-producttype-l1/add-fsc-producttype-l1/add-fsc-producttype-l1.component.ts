import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,FormArray } from '@angular/forms';
import { FscProducttypeL1Service } from '@app/services/master/fsc-producttype-l1/fsc-producttype-l1.service';
import { FscProductService } from '@app/services/master/fsc-product/fsc-product.service';
import { ErrorSummaryService } from '@app/helpers/errorsummary.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Product } from '@app/models/master/product';

@Component({
  selector: 'app-add-fsc-producttype-l1',
  templateUrl: './add-fsc-producttype-l1.component.html',
  styleUrls: ['./add-fsc-producttype-l1.component.scss']
})
export class AddFscProducttypeL1Component implements OnInit {
  title = 'Add Level 1 FSC Product';
  btnLabel = 'Save';
  productList:Product[];
  form : FormGroup;
  loading = false;
  buttonDisable = false;
  error:any;
  submittedError = false;
  success:any;
  product_idErrors = '';
  nameErrors = '';
  codeErrors = '';
  formData:FormData = new FormData();
  constructor(private router: Router,private fb:FormBuilder,private fscproducttype1Service: FscProducttypeL1Service,private fscproductservice : FscProductService,private errorSummary: ErrorSummaryService) { }

  ngOnInit() {
		
	this.fscproductservice.getProductList().subscribe(res => {
      this.productList = res['products'];      
    });	
	
	this.form = this.fb.group({
      product_id:['',[Validators.required]],      
      name:['',[Validators.required, this.errorSummary.noWhitespaceValidator, Validators.maxLength(255), Validators.pattern("^[a-zA-Z0-9 \'\-+%/&,().-]+$")]],
	  code:['',[Validators.required, this.errorSummary.noWhitespaceValidator, Validators.maxLength(50),Validators.pattern("^[a-zA-Z0-9 \'\-+%/&,().-]+$")]],
	  //description:['',[this.errorSummary.noWhitespaceValidator]], 	  
    });
	
  }

  get f() { return this.form.controls; }
  
  onSubmit(){
    if (this.form.valid) {
      
      this.loading = true;
	  
	  this.fscproducttype1Service.addFscTypeOneData(this.form.value)
      .pipe(
        first()        
      ).subscribe(res => {
          if(res.status){
            this.success = {summary:res.message};
			this.buttonDisable=true;
            setTimeout(()=>this.router.navigate(['/master/fsc-producttype-l1/list']),this.errorSummary.redirectTime);            
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
    } else {
	  this.error = {summary:this.errorSummary.errorSummaryText};
      this.errorSummary.validateAllFormFields(this.form);       
    }
  }

}

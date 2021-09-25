import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,FormArray } from '@angular/forms';
import { FscProductService } from '@app/services/master/fsc-product/fsc-product.service';
import { FscProducttypeL1Service } from '@app/services/master/fsc-producttype-l1/fsc-producttype-l1.service';
import { ErrorSummaryService } from '@app/helpers/errorsummary.service';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FscProductType } from '@app/models/master/FscProductType';


@Component({
  selector: 'app-edit-fsc-producttype-l1',
  templateUrl: '../add-fsc-producttype-l1/add-fsc-producttype-l1.component.html',
  styleUrls: ['./edit-fsc-producttype-l1.component.scss']
})
export class EditFscProducttypeL1Component implements OnInit {

  title = 'Edit Level 1 FSC Product Description';
  btnLabel = 'Update';
  id:number;
  productList:FscProductType[];
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
  
  constructor(private activatedRoute:ActivatedRoute,private router: Router,private fb:FormBuilder,private fscproductService: FscProductService,private producttype1Service:FscProducttypeL1Service,private errorSummary: ErrorSummaryService) { }

  ngOnInit() {
	  
	this.id = this.activatedRoute.snapshot.queryParams.id;
		
	this.fscproductService.getProductList().subscribe(res => {
      this.productList = res['products'];      
    });	
	
	this.form = this.fb.group({
	  id:[''],
      product_id:['',[Validators.required]],      
      name:['',[Validators.required, this.errorSummary.noWhitespaceValidator, Validators.maxLength(255), Validators.pattern("^[a-zA-Z0-9 \'\-+%/&,().-]+$")]],
      code:['',[Validators.required, this.errorSummary.noWhitespaceValidator, Validators.maxLength(50),Validators.pattern("^[a-zA-Z0-9 \'\-+%/&,().-]+$")]],
      //description:['',[this.errorSummary.noWhitespaceValidator]],    	  
    });
	
	this.producttype1Service.getProductType(this.id).pipe(first())
    .subscribe(res => {
      let producttype = res.data;	  
      this.form.patchValue({
        product_id : producttype.fsc_product_id,
        name : producttype.name,
        code : producttype.code,
        id : producttype.id
      });
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
	  
	  this.producttype1Service.updateData(this.form.value)
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
  selector      : 'app-form-product',
  templateUrl   : './form-product.component.html',
  styleUrls     : ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
    alert       : boolean = false;
    constructor(private router: Router,private rest: RestApiService) { }
    productName = '';
    Price       = '';
    urlImage    = '';
    ngOnInit() {
    }

    async saveProduct(){
        try{        
            const data = await this.rest.post(
                'http://localhost:8081/api/save',
                {
                    productName : this.productName,
                    Price       : this.Price,
                    urlImage    : this.urlImage
                }
            );
            if (data['success']){
                this.router.navigate(['list']); 
            }else{
                this.alert = true;
            }
        } catch (error){
            this.router.navigate(['list']);
        }
    }

}

import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail-product',
    templateUrl: './detail-product.component.html',
    styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
    product: any;
    _id : String;
    constructor(private rest: RestApiService,private activatedRoute: ActivatedRoute) { 
        this._id = activatedRoute.snapshot.url[1].path;
    }

    async ngOnInit() {
        try {
            const id = this._id
            const data = await this.rest.get(
            `http://localhost:8081/api/detail/${id}`
            );
            this.product = data['product'];
        } catch (error) {
            console.log(error);
        }
    }

}

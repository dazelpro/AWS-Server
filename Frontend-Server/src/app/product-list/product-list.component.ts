import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: Object;
  title = 'Frontend-Server';
  constructor(private rest: RestApiService) {}

  async ngOnInit() {
      try {
          const data = await this.rest.get(
          'http://localhost:8081/api/'
          );
          this.product = data['product'];
      } catch (error) {
      console.log(error);
      }
  }

}

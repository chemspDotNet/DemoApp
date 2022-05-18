
import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  constructor(private productservice: ProductDataService) { }

  categories = ['Fruits', 'Vegetables', 'Dairy', 'Meat', 'Bakery', 'Vegan'];
  ngOnInit(): void {

  }

}

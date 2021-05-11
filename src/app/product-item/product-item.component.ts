import { Component, Input, OnInit  } from '@angular/core';
import { Product } from '../models/product';
import { ProductlistService } from '../service/productlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
@Input() product:Product;
  constructor(private selectedProductSV:ProductlistService) {}

  onSelectedProduct (img,type){
    this.selectedProductSV.setSelectedProduct(img,type)
  }


  ngOnInit(): void {}
}

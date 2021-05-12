import { Component, Input, OnInit, Type } from '@angular/core';
import { ProductlistService } from '../service/productlist.service';

type SelectedProduct = {
  topclothes:string,
  botclothes:string,
  shoes:string,
  handbags:string,
  necklaces:string,
  hairstyle:string,
  background:string
}

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  constructor(private SelectedProductSV:ProductlistService) { }
  selectedProduct:SelectedProduct;
  ngOnInit(): void {
    this.SelectedProductSV.selectedProduct.subscribe((val)=>{
      this.selectedProduct = val;
    })
    // this.selectedProduct = this.SelectedProductSV.selectedProduct; //Lấy giá trị lúc component didmount
    // this.SelectedProductSV.selectedProductEmitter.subscribe((val)=>{ //Theo dõi state khi có thấy đổi
      // this.selectedProduct = val;
    // })
  }

}

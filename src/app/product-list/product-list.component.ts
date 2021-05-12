import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { ProductlistService } from '../service/productlist.service';
import { Product } from '../models/product';
import { CategoryService } from '../service/category.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges {
  constructor(
    private ProductListSV: ProductlistService,
    private categorySV: CategoryService
  ) {}

  ProducList: Product[]; //Khai báo thuộc tính là 1 mảng rỗng có kiểu dữ liệu là class Product

  ngOnInit(): void {
    this.categorySV.selectedCategory.subscribe((val) => {
      console.log(val);

      this.ProducList = this.ProductListSV.Data.filter((item) => {
        return item.type === val;
      });

      console.log(this.ProductListSV.Data, 'RUN');
      console.log(this.ProducList);
    });
    // this.ProducList = this.ProductListSV.Data.filter((item) => item.type === this.categorySV.selectedCategory) // Mặc định để load cái áo về
    // console.log(this.ProductListSV.Data)
    // this.categorySV.selectedCategoryEmitter.subscribe((val)=>{
    // this.ProducList = this.ProductListSV.Data.filter(item=>item.type===val)
    // })// Khi emitter đẩy dữ liệu đi nó sẽ lưu 1 phần dữ liệu đó trong emitter, nên mỗi lần thay đổi sử dụng hàm subcribe để bắt dữ liệu mới và cập nhật lại Product List
  }

  //lifecycle chạy khi mà input đầu vào thay đổi
  ngOnChanges() {}
}

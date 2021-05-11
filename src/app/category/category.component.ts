import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../service/category.service'
import {category} from '../models/category'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryList :category[] = this.categorySv.categorylist
  // services
  selectedCategory:string;

  constructor(public categorySv:CategoryService) {} //Lấy file trên service về phải khai báo trong constructor// để khi các component sử dụng sẽ thông nhất 1 dữ liệu

  onSelectCategory(type:string){ //Khi user chọn category sẽ truyền type vào đây, rùi ở đây gọi hàm set của trên service thay đổi state. Giống dispatch thay đổi.
    this.categorySv.setSelectedCategory(type)
    // console.log(this.categorySv.selectedCategory)
  }

  //lifecycle chạy lúc đầu
  ngOnInit(): void { //void là chỉ chạy hàm không trả về dữ liệu
    // this.categoryList = this.categorySv.categorylist
    this.selectedCategory = this.categorySv.selectedCategory;
    this.categorySv.selectedCategoryEmitter.subscribe((val)=>{
      this.selectedCategory =val;
    })
  }
}

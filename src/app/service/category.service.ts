import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categorylist = [
    { tabName: 'tabTopClothes', showName: 'Áo', type: 'topclothes' },
    { tabName: 'tabBotClothes', showName: 'Quần', type: 'botclothes' },
    { tabName: 'tabShoes', showName: 'Giày dép', type: 'shoes' },
    { tabName: 'tabHandBags', showName: 'Túi xách', type: 'handbags' },
    { tabName: 'tabNecklaces', showName: 'Dây chuyền', type: 'necklaces' },
    // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
    { tabName: 'tabHairStyle', showName: 'Kiểu tóc', type: 'hairstyle' },
    { tabName: 'tabBackground', showName: 'Nền', type: 'background' }
  ]
  selectedCategory = 'topclothes';
  @Output() selectedCategoryEmitter = new EventEmitter(); // Nhiệm vụ đẩy dữ liệu tạo chuông lắng nghe sự thay đổi state.

  setSelectedCategory(type:string){
    this.selectedCategory=type;
    this.selectedCategoryEmitter.emit(this.selectedCategory) // Sau khi dữ liệu thay đổi hàm emit() có nhiệm vụ đẩy dữ liệu mới đi cho các component sử dụng dữ liệu này
    console.log(this.selectedCategory)
  }
  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obervable',
  templateUrl: './obervable.component.html',
  styleUrls: ['./obervable.component.scss']
})
export class ObervableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
//Promise chỉ tra 1 result. Nhưng Obervable có thể trả nhiều và nó mở luồng theo dõi data từ backend
    const a = new Observable((observer)=>{
      setTimeout(()=>{
        observer.next('data');
        observer.next('data2');
      },2000)
      a.subscribe((res)=>{
        console.log(res)

      })

    })
  }

}

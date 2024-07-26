import { CommonModule } from '@angular/common';
import { Component,HostListener,OnInit, OnDestroy} from '@angular/core';
import { count } from 'console';
import { clearInterval } from 'timers';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-gostericiler',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gostericiler.component.html',
  styleUrl: './gostericiler.component.scss'
})

// let experince = document.getElementById("experince")
// let projects = document.getElementById("projects")
// let erp_module = document.getElementById("erp_module")
// let hr_module = document.getElementById("hr_module")

// for(let i=1; i<=10;i++){
//   experince.innerText = `${i}`
// }

export class GostericilerComponent{
  scrollPosition: number = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.scrollPosition = window.scrollY || window.pageYOffset;
    if(this.scrollPosition>=3400 && this.scrollPosition <= 3600){
      // this.counteR()
      // this.print_obj()
      this.startInterval1();
      this.startInterval2();
      this.startInterval3();
    }
  }

  // print_obj() {
  //   let obj = new GostericilerComponent()
  //   console.log("before")
  //   console.log(obj)
  //   obj.datas[0].count = 5
  //   console.log("after")
  //   console.log(obj)
  // }
  datas:any=[
     {name:"Lahiyə",count:0,value:225,realValue:114},
     {name:"ERP Modulu",count:0,value:125,realValue:47},
     {name:"HR Modulu",count:0,value:325,realValue:23},
   
  ]
  intervalId1: number | undefined;
  intervalId2: number | undefined;
  intervalId3: number | undefined;

  startInterval1(): void {;
    this.intervalId1 = window.setInterval(() => {
      if(this.datas[0].count < this.datas[0].realValue){
        this.datas[0].count++;
      }
      if(this.datas[0].count == this.datas[0].realValue){
        this.intervalId1 = undefined;
      }
    }, 100); // Adjust the interval time (in milliseconds) as needed
  }
  startInterval2(): void {;
    this.intervalId2 = window.setInterval(() => {
      if(this.datas[1].count < this.datas[1].realValue){
        this.datas[1].count++;
      }
      if(this.datas[1].count == this.datas[1].realValue){
        this.intervalId2 = undefined;
      }
    }, 100); // Adjust the interval time (in milliseconds) as needed
  }
  startInterval3(): void {;
    this.intervalId3 = window.setInterval(() => {
      if(this.datas[2].count < this.datas[2].realValue){
        this.datas[2].count++;
      }
      if(this.datas[2].count == this.datas[2].realValue){
        this.intervalId3 = undefined;
      }
    }, 100); // Adjust the interval time (in milliseconds) as needed
  }
}

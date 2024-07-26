import { CommonModule} from '@angular/common';
import { Component, HostListener , OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{
  menuOpnener:boolean = false
  menuCloser:boolean = false
  goDown:boolean = false
  goUp:boolean = false

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if(this.goDown==true && this.menuOpnener==true){
      this.goDown=false;
      this.menuOpnener=false;
      this.menuCloser=true;
      this.goUp=true;
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.goDown=false;
        this.menuOpnener=false;
        this.menuCloser=true;
        this.goUp=true;
      }
    });
  }

  handleOnclick(){
    if(this.menuOpnener==true){
      this.menuCloser=!this.menuCloser
      this.goUp=!this.goUp
    }else{
      this.goUp=false
      this.menuCloser=false;
    }
    this.goDown=!this.goDown
    this.menuOpnener = !this.menuOpnener
  }

  constructor(private router: Router) {}
   
}

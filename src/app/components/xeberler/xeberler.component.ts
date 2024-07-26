import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-xeberler',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './xeberler.component.html',
  styleUrl: './xeberler.component.scss'
})
export class XeberlerComponent {

}

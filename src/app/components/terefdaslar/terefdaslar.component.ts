import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-terefdaslar',
  standalone: true,
  imports: [],
  templateUrl: './terefdaslar.component.html',
  styleUrl: './terefdaslar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TerefdaslarComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-video-div',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './video-div.component.html',
  styleUrl: './video-div.component.scss'
})
export class VideoDivComponent {

}

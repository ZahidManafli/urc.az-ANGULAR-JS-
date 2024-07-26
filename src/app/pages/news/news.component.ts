import { Component,HostListener , OnInit } from '@angular/core';
import { newsData } from '../../utils/newsData';
import { NewsItemComponent } from './news-item/news-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NewsItemComponent,CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  newsDatas:object[] = newsData 
}

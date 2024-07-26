import { Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { MainComponentComponent } from './pages/main-component/main-component.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:"",component:MainComponentComponent},
    {path:"news",component:NewsComponent},
    {path:"contact",component:ContactComponent},
];

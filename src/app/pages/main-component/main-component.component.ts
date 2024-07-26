import { Component } from '@angular/core';
import { HomeComponent } from '../../components/home/home.component';
import { URCComponent } from '../../components/urc/urc.component';
import { XidmetlerComponent } from '../../components/xidmetler/xidmetler.component';
import { XeberlerComponent } from '../../components/xeberler/xeberler.component';
import { TerefdaslarComponent } from '../../components/terefdaslar/terefdaslar.component';
import { UnicalTapsiriqlarComponent } from '../../components/unical-tapsiriqlar/unical-tapsiriqlar.component';
import { GostericilerComponent } from '../../components/gostericiler/gostericiler.component';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [HomeComponent,URCComponent,XidmetlerComponent,XeberlerComponent,TerefdaslarComponent,UnicalTapsiriqlarComponent,GostericilerComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent {

}

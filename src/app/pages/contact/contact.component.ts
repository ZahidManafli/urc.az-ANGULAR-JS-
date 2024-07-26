import { CommonModule } from '@angular/common';
import {FormControl, FormGroup,ReactiveFormsModule,FormsModule, FormBuilder, Validators} from '@angular/forms'
import { Component , NgModule} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form:FormGroup;
  valid:boolean = false
  invalid:boolean = false
  submitted:boolean = false;
  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      name :["",[Validators.required,Validators.pattern('^[a-zA-Z]{3,}$')]],
      email : ["",[Validators.required,Validators.email]],
      subject : ["",[Validators.required]],
      message : ["",[Validators.required]],
    });
  }
  get f() {
    return this.form.controls;
  }


  handleSubmit(): void{
    this.submitted = true;
    if(this.form.valid){
      console.log(this.form.value)
    }

  }
}

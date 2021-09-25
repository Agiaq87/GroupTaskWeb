import { Component } from '@angular/core';
import {TaskService} from "./service/task.service";

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Group Task';
 
  login:boolean=false;
password:any
email:any
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]
  );
  passwordControl = new FormControl('', [Validators.required])
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  matcher = new ErrorStateMatcher();


  constructor() {
    
  
  } 
  
  submitLogin(){
    //inserire chiamata login
    // 
    console.log(this.passwordControl.value)
    console.log(this.emailFormControl.value)
  let log={
      email:this.emailFormControl.value,
      password:this.emailFormControl.value
    }
    this.login=true;
    //chiama servizio con oggetto log inserire nel caso di true this.login =true; in caso di false prevedere
    //un messaggio di errore 
  }
}

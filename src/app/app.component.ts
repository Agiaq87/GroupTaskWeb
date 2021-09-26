import {Component} from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSnackBar,} from '@angular/material/snack-bar';
import {UserType} from "../model/usertype.model";

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
  matcher = new ErrorStateMatcher();
  emailFormControl = new FormControl('', [Validators.required, Validators.email,]);
  passwordControl = new FormControl('', [Validators.required])
  hide: boolean = true;
  grado:any;
  utenti= [{email:"admin@gmail.com",password:"password",grado:UserType.ADMIN},{email:"utente@gmail.com",password:"password",grado:UserType.EXECUTOR}];

  constructor(private _snackBar: MatSnackBar) {

  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }


  submitLogin(){
    //inserire chiamata login
    //
    this._snackBar.open("Attendere...","", {
      horizontalPosition:'center',
      verticalPosition: 'bottom'
    });

    setTimeout(() => {
      this._snackBar.dismiss();
    }, 2000)

    console.log(this.passwordControl.value)
    console.log(this.emailFormControl.value)
  let log = {
      email:this.emailFormControl.value,
      password:this.passwordControl.value
    }
    this.utenti.forEach(element => {
      if(element.email==log.email && element.password==log.password){
        this.grado=element.grado
        this.login=true
      }
    });

    //chiama servizio con oggetto log inserire nel caso di true this.login =true; in caso di false prevedere
    //un messaggio di errore
  }
}

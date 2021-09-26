import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserType} from "../../model/usertype.model";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass']
})
export class LoadingComponent implements OnInit {
  @Input() grado: UserType | any;

  constructor(private route:Router) { }

  ngOnInit(): void {
    console.log("grado",this.grado)
    switch (this.grado) {
      case UserType.STAGE: {
       // /home/grado0
       this.route.navigate(['/home'])
        break;
      }
      case UserType.EXECUTOR:{
        this.route.navigate(['/home'])
        break;
      }
      case UserType.TESTER:{
        this.route.navigate(['/home'])
        break;
      }
      case UserType.MODERATOR:{
        this.route.navigate(['/home'])
        break;
      }
      case UserType.ADMIN:{
        this.route.navigate(['/home'])
        break;
      }
      case UserType.SU:{
        this.route.navigate(['/home'])
        break;
      }
      default:
        break;
    }
  }
  }


function input() {
  throw new Error('Function not implemented.');
}


import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass']
})
export class LoadingComponent implements OnInit {
@Input() grado:any;
  constructor(private route:Router) { }

  ngOnInit(): void {
    console.log("grado",this.grado)
    switch (this.grado) {
      case "0":{
       // /home/grado0
       this.route.navigate(['/home'])
        break;
    }
    case"1":{
      this.route.navigate(['/home'])
      break
    }
      default:
        break;
    }
  }
  }


function input() {
  throw new Error('Function not implemented.');
}


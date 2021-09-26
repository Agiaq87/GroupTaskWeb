import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass']
})
export class LoadingComponent implements OnInit {
@Input() grado:any;
  constructor() { }

  ngOnInit(): void {
    switch (this.grado) {
      case "0":{
       
        break;
    }
    case"1":{
      
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


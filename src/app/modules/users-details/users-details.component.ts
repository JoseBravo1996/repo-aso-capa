import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit, OnChanges {

  public numberLyfe= 100;

  constructor() {
    console.log("constructor " + this.numberLyfe);
  }
  
  ngOnChanges() {
    console.log("ngOnChange " + this.numberLyfe);
  }

  ngOnInit() {
    console.log("ngOnInit " + this.numberLyfe);
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");

  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }


  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  add(){
    this.numberLyfe += 10;
  }

  delete(){
    this.numberLyfe -= 10;
  }
}

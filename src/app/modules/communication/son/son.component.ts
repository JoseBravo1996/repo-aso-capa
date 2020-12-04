import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit {

  @Input() sendSon: string;
  @Output() sendDad = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  sendAlertToDad(msg: boolean){
    this.sendDad.emit(msg)
  }

}

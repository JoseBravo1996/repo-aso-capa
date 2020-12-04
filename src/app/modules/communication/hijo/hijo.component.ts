import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() sendPadre: string;
  @Output() sendOutputPadre = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  sendMessagePadre(msg: boolean){
    this.sendOutputPadre.emit(msg);
  }

}

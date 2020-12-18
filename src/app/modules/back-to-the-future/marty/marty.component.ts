import { OfiTelegrafoService } from './../../../data/services/ofi-telegrafo/ofi-telegrafo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'marty',
  templateUrl: './marty.component.html',
  styleUrls: ['./marty.component.scss']
})
export class MartyComponent implements OnInit {

  form: FormGroup;
  messageDoc: string;

  constructor(private formBuilder: FormBuilder, private ofiTelegrafoService: OfiTelegrafoService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      controlMarty: new FormControl()
    })
  }

  sendMessage(event) {
    this.ofiTelegrafoService.sendMessage(event);
    this.form.reset();
  }

  viewMessage() {
    this.ofiTelegrafoService.telegrafista$.subscribe(msg => this.messageDoc = msg);
  }

}

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BackToTheFutureService } from '@data/services/back-to-the-future/back-to-the-future.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-marty',
  templateUrl: './marty.component.html',
  styleUrls: ['./marty.component.scss']
})
export class MartyComponent implements OnInit {

  messageToDoc: string;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private backToTheFutureService: BackToTheFutureService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      control: new FormControl()
    })
  }

  sendMessage(event){
    this.backToTheFutureService.send(event);
    this.form.reset();
  }

  viewMessage() {
    this.backToTheFutureService.telegrafista$.pipe(take(1)).
      subscribe(mensaje => this.messageToDoc = mensaje);
  }

}

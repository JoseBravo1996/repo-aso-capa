import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BackToTheFutureService } from '@data/services/back-to-the-future/back-to-the-future.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-doc-brown',
  templateUrl: './doc-brown.component.html',
  styleUrls: ['./doc-brown.component.scss']
})
export class DocBrownComponent implements OnInit {

  messageToMarty: string;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private backToTheFutureService: BackToTheFutureService) {
    this.backToTheFutureService.telegrafista$.subscribe(
      resp => console.log(resp)
    )
   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      controlDoc: new FormControl()
    })
  }

  sendMessage(event){
    this.backToTheFutureService.send(event);
    this.form.reset();
  }

  viewMessage() {
    this.backToTheFutureService.telegrafista$.pipe(take(1)).
      subscribe(mensaje => this.messageToMarty = mensaje);
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BackToTheFutureService } from '@data/services/back-to-the-future/back-to-the-future.service';
import { add } from 'ngx-bootstrap/chronos';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-doc-brown',
  templateUrl: './doc-brown.component.html',
  styleUrls: ['./doc-brown.component.scss']
})
export class DocBrownComponent implements OnInit, OnDestroy {

  messageToMarty: string;
  form: FormGroup;
  private suscription: Subscription;
  private suscription$: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private backToTheFutureService: BackToTheFutureService) {
    this.backToTheFutureService.telegrafista$.subscribe(
    )
   }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
    this.suscription$.forEach((sub) => sub.unsubscribe());

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
    this.suscription = this.backToTheFutureService.telegrafista$.pipe(take(1)).
      subscribe(mensaje => this.messageToMarty = mensaje);

      this.suscription.add(this.backToTheFutureService.telegrafista$.pipe(take(1)).
      subscribe(mensaje => this.messageToMarty = mensaje));
  }


}

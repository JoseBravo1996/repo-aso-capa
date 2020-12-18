import { OfiTelegrafoService } from './../../../data/services/ofi-telegrafo/ofi-telegrafo.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'doc-brown',
  templateUrl: './doc-brown.component.html',
  styleUrls: ['./doc-brown.component.scss']
})
export class DocBrownComponent implements OnInit, OnDestroy {

  form: FormGroup;
  messageMarty: string;
  messages: string[] = [];
  private suscription$: Subscription;
  private suscription: Subscription[] = [];
  unsuscribe$: Subject<any> = new Subject();

  constructor(private formBuilder: FormBuilder, private ofiTelegrafoService: OfiTelegrafoService) { }

  ngOnDestroy(): void {
    this.suscription$.unsubscribe();

    this.suscription.forEach( sub => sub.unsubscribe);

    this.unsuscribe$.next();
    this.unsuscribe$.complete();

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      controlDoc: new FormControl()
    })
  }

  sendMessage(event) {
    this.ofiTelegrafoService.sendMessage(event);
    this.form.reset();
  }

  viewMessage() {
    // utilizando un suscribe
  this.suscription$ = this.ofiTelegrafoService.telegrafista$.subscribe(msg => this.messageMarty = msg);

  //array de suscribe
  this.suscription.push(this.ofiTelegrafoService.telegrafista$.subscribe(msg => this.messages.push(msg)));

  //metodo add
  this.suscription$.add(this.ofiTelegrafoService.telegrafista$.subscribe(msg => this.messages.push(msg)));
  //mediante takeUtil

  // this.ofiTelegrafoService.telegrafista$.pipe(takeUntil(this.unsuscribe$)).subscribe(msg => this.messages.push(msg);

}




}

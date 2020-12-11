import { CloseRecover } from './../../data/interfaces/recover/closeRecover';
import { RejectRecover } from './../../data/interfaces/recover/rejectRecover';
import { ReadReasons } from './../../data/interfaces/recover/readReasons';
import { RecoverService } from './../../data/services/recover/recover.service';
import { ScCurrencyPipe } from '@sc/portal.fe.lib.ui-core-components';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
  providers: [ScCurrencyPipe]
})
export class RecoverComponent implements OnInit {

  form: FormGroup;
  public reasons: ReadReasons[] = [];

  constructor(private formBuilder: FormBuilder, private scCurrency: ScCurrencyPipe, private recoverService: RecoverService
    , private toastService: ToastrService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      remanente: new FormControl(40000),
      motivos: new FormControl(),
      observacion: new FormControl()
    })

    this.readClosingReason();
  }

  autorizar(){
    let close: CloseRecover;
    close = {
      RecoverId: 21,
      ReasonId: this.form.controls['motivos'].value.Id,
      Observation: this.form.controls['observacion'].value
    }
    this.recoverService.closeRecoverDifferenceValuesAsync(close).subscribe(
      () => this.toastService.success('Se cerro el recupero '+ close.RecoverId),
      () => this.toastService.error('Fallo el cierre del recupero '+ close.RecoverId),
    );
  }

  reject(){
    let reject: RejectRecover;
    reject = {
      RecoverId: 21
    }
   this.recoverService.rejectClosingRecoverAsync(reject).subscribe(
    () => this.toastService.success('Se rechazo el recupero '+ reject.RecoverId),
    () => this.toastService.error('Fallo el rechazo del recupero '+ reject.RecoverId),
  );
  }

  readClosingReason(){
    this.recoverService.readClosingReasonsDifferenceAsync().subscribe(resp =>{
      this.reasons = resp.Reasons;
    });
  }

}

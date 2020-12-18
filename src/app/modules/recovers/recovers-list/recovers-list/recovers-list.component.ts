import { BackToTheFutureService } from './../../../../data/services/back-to-the-future/back-to-the-future.service';
import { ReadClosingReasonsDifference } from '@data/interfaces/recover/readClosingReasonsDifference';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ScCurrencyPipe } from '@sc/portal.fe.lib.ui-core-components';
import { CloseRecoverDifferenceValues, RejectClosingRecover } from '@data/interfaces/recover';
import { RecoversService } from '@data/services/recovers/recovers.service';
import { ToastrService } from 'ngx-toastr';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-recovers-list',
  templateUrl: './recovers-list.component.html',
  styleUrls: ['./recovers-list.component.scss'],
  providers: [ScCurrencyPipe]
})
export class RecoversListComponent implements OnInit {

  @Input() recoverId: number;
  public form: FormGroup;
  public reasons: ReadClosingReasonsDifference[] = [];

  constructor(private formBuilder: FormBuilder, private scCurrency: ScCurrencyPipe,
    private recoversService: RecoversService, private toastrService: ToastrService,private backToTheFutureService: BackToTheFutureService) {
      this.recoverId = 21;
    }

  ngOnInit() {
    this.createForm();
    this.readClosinReason();
    this.viewMessage();
  }

  createForm() {
    this.form = this.formBuilder.group({
      remainder: new FormControl(0, Validators.required),
      reason: new FormControl(null, Validators.required),
      observations: new FormControl(null, Validators.maxLength(256)),
    });
  }

  onReject() {
    let rejectRecover: RejectClosingRecover;
    rejectRecover = {
      RecoverId: this.recoverId,
    };
    this.recoversService.rejectClosingRecoverAsync(rejectRecover).subscribe(
      () => {
        this.toastrService.success("Se ha rechazado el cierre del recupero " + this.recoverId);
      },
      () => {
        this.toastrService.error("Hubo un problema, intente más tarde.");
      }
    );
  }

  onAuthorize() {
    let closeRecover: CloseRecoverDifferenceValues;
    closeRecover = {
      RecoverId: this.recoverId,
      ReasonId: this.form.controls['reason'].value.Id,
      Observation: this.form.controls['observations'].value
    };
    this.recoversService.closeRecoverDifferenceValuesAsync(closeRecover).subscribe(
      () => {
        this.toastrService.success("Se autorizo el cierre del recupero " + this.recoverId);
      },
      () => {
        this.toastrService.error("Hubo un problema, intente más tarde.");
      }
    );
  }

  readClosinReason() {
    this.recoversService.readClosingReasonsDifferenceAsync().subscribe(resp => {
      this.reasons = resp.Reasons;
    });
  }

  viewMessage() {
    const valor = this.backToTheFutureService.telegrafista$.pipe(
      filter(char => char == 'hola'),
      map(char => char.toUpperCase()),
    );

      valor.subscribe(mensaje => console.log(mensaje));
  }

}

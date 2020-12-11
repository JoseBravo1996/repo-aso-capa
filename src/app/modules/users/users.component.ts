import { UsersService } from '../../data/services/users/users.service';


import { EmailValidators } from './../../shared/validators/email-validators';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ScCurrencyPipe } from '@sc/portal.fe.lib.ui-core-components';

const ERROR_MESSAGE = {
  pattern: "Debe ingresar un apellido en miniscula",
  required: "Tenes que cargar esto",
  notExist: "Ya existe un mail en la DB"
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ScCurrencyPipe]
})
export class UsersComponent implements OnInit {

  public formUser: FormGroup;
  public customErrorMessages: any;
  public dateBirth = new Date();
  public valuePayment = 32332423;
  public items = [
    {
      key: 'dni',
      value: 'DNI'
    },
    {
      key: 'ced',
      value: 'CEDULA'
    },
    {
      key: 'pas',
      value: 'PASAPORTE'
    }
  ];

  constructor(private formBuilder: FormBuilder, private ref: ChangeDetectorRef, private userService: UsersService
    ,private scCurrency: ScCurrencyPipe) {
    this.customErrorMessages = ERROR_MESSAGE;
   }

  ngOnInit() {
    this.createForm();
  }

  ngAfterViewInit(){
    this.ref.detectChanges();
  }

  public createForm(){
    this.formUser = this.formBuilder.group({
      type: new FormControl(null, Validators.required),
      dni: new FormControl(null, Validators.required),
      name: new FormControl(null, [Validators.minLength(1), Validators.maxLength(10), Validators.required ]),
      lastname: new FormControl(null, Validators.compose([Validators.pattern(/^[a-z]+$/)])),
      prince: new FormControl(),
      dateNac: new FormControl(),
      age: new FormControl(null, [Validators.min(18), Validators.max(80), Validators.required]),
      mail: new FormControl(null, [Validators.required, Validators.email], EmailValidators.validateMail(this.userService))
    })
  }

  saveForm(){
    console.log(this.formUser.value);
  }
}

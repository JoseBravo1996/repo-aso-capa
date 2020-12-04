import { UsersService } from '@data/services/api/users/users.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidations } from '@shared/validators/my-validations';
import { ScCurrencyPipe } from '@sc/portal.fe.lib.ui-core-components';



const ERROR_MESSAGES = {
  pattern: "No se ingreso el patron correcto",
  notAvailable: "Este mail no esta disponible"
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ScCurrencyPipe]
})
export class UsersComponent implements OnInit {

  public formUser: FormGroup;
  public errorMessages: any;

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

  constructor(private formBuilder: FormBuilder, private ref: ChangeDetectorRef, private userService: UsersService,
    private scCurrency: ScCurrencyPipe) {
    this.errorMessages = ERROR_MESSAGES;
   }

  ngOnInit() {
    this.createForm();
  }

  ngAfterViewChecked() {
    this.ref.detectChanges();
  }

  public createForm() {
    this.formUser = this.formBuilder.group({
      type: new FormControl(null, Validators.required),
      dni: new FormControl(null, Validators.required),
      name: new FormControl(null, [Validators.pattern(/^[a-z A-Z]+$/), Validators.compose([Validators.minLength(5), Validators.maxLength(20)])]),
      price: new FormControl(null, Validators.compose([Validators.min(1), Validators.max(100)])),
      age: new FormControl(0, Validators.min(18)),
      birth: new FormControl(),
      mail: new FormControl(null,  {validators: [Validators.required], asyncValidators: [ MyValidations.validateEmail(this.userService)]})
    })
  }

  saveForm() {
    console.log(this.formUser.value);
  }
}

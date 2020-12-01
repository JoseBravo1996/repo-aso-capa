import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public formUser: FormGroup;
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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm(){
    this.formUser = this.formBuilder.group({
      type: new FormControl(),
      dni: new FormControl(null, Validators.required),
      name: new FormControl(),
      lastname: new FormControl()
    })
  }

  saveForm(){
    console.log(this.formUser.value);
  }
}

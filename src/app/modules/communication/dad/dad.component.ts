import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dad',
  templateUrl: './dad.component.html',
  styleUrls: ['./dad.component.scss']
})
export class DadComponent implements OnInit {

  form: FormGroup;
  sendSon: string = '';
  public validMessage: boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      com: new FormControl()
    })
    
    this.form.controls['com'].valueChanges.subscribe(
      data => this.sendSon = data
    );
  }

  sendAlertToDad(data: boolean) {
    if (data) {
        this.validMessage = data;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {

  public form: FormGroup;
  public sendHijo: string;
  public sendValuePadre: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      control: new FormControl()
    })

    this.form.controls['control'].valueChanges.subscribe(
      data => {
        this.sendHijo = data
      }
    );
  }

  recibAlert(data: boolean){
    if(data){
      this.sendValuePadre = data;
    }
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, InputModule, SelectModule, DatePickerModule, AlertModule } from '@sc/portal.fe.lib.ui-core-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SelectModule,
    InputModule,
    ButtonModule,
    DatePickerModule,
    AlertModule.forRoot(),
    ToastrModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SelectModule,
    InputModule,
    ButtonModule,
    DatePickerModule,
    AlertModule,
    ToastrModule
  ],
  // providers: [servicioacompatir] -> si queremos crear un servicio compartido
})
export class SharedModule { }

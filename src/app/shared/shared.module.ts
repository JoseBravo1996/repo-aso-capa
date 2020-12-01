import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, InputModule, SelectModule } from '@sc/portal.fe.lib.ui-core-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SelectModule,
    InputModule,
    ButtonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SelectModule,
    InputModule,
    ButtonModule
  ]
})
export class SharedModule { }

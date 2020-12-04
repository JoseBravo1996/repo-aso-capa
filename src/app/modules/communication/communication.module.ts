import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';



@NgModule({
  declarations: [PadreComponent, HijoComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CommunicationModule { }

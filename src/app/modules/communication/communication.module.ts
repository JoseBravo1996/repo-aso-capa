import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadComponent } from './dad/dad.component';
import { SonComponent } from './son/son.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [DadComponent, SonComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CommunicationModule { }

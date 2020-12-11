import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MartyComponent } from './marty/marty.component';
import { DocBrownComponent } from './doc-brown/doc-brown.component';



@NgModule({
  declarations: [MartyComponent, DocBrownComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MartyComponent, DocBrownComponent]
})
export class BackToTheFutureModule { }

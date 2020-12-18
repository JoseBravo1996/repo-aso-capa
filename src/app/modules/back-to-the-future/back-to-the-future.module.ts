import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MartyComponent } from './marty/marty.component';
import { DocBrownComponent } from './doc-brown/doc-brown.component';
import { BackToTheFutureComponent } from './back-to-the-future.component';



@NgModule({
  declarations: [MartyComponent, DocBrownComponent, BackToTheFutureComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [BackToTheFutureComponent]
})
export class BackToTheFutureModule { }

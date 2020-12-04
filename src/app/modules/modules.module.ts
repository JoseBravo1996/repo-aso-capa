import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { UsersComponent } from './user/users/users.component';
import { UsersDetailsComponent } from './user/users-details/users-details.component';
import { CommunicationModule } from './communication/communication.module';
import { ModulesRoutingModule } from './modules-routing.module';

@NgModule({
  declarations: [UsersComponent, UsersDetailsComponent],
  imports: [
    ModulesRoutingModule,
    CommunicationModule,
    SharedModule
  ]
})
export class ModulesModule { }

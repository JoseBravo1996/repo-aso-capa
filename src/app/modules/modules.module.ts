import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersComponent, UsersDetailsComponent],
  imports: [
    UsersRoutingModule,
    SharedModule
  ]
})
export class ModulesModule { }

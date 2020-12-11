import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommunicationModule } from './communication/communication.module';
import { RickAndMortyComponent } from './rickAndMorty/rick-and-morty.component';
import { RecoverComponent } from './recover/recover.component';

@NgModule({
  declarations: [UsersComponent, UsersDetailsComponent, RickAndMortyComponent, RecoverComponent],
  imports: [
    UsersRoutingModule,
    SharedModule,
    CommunicationModule
  ]
})
export class ModulesModule { }

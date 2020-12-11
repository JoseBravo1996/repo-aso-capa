import { BackToTheFutureComponent } from './back-to-the-future/back-to-the-future.component';
import { BackToTheFutureModule } from './back-to-the-future/back-to-the-future.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommunicationModule } from './communication/communication.module';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';
import { RecoversListComponent } from './recovers/recovers-list/recovers-list/recovers-list.component';

@NgModule({
  declarations: [UsersComponent, UsersDetailsComponent, RickAndMortyComponent, BackToTheFutureComponent, RecoversListComponent],
  imports: [
    UsersRoutingModule,
    SharedModule,
    CommunicationModule,
    BackToTheFutureModule
 ]
})
export class ModulesModule { }

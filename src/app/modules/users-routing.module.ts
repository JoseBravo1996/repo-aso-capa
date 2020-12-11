import { RecoversListComponent } from './recovers/recovers-list/recovers-list/recovers-list.component';
import { BackToTheFutureComponent } from './back-to-the-future/back-to-the-future.component';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { PadreComponent } from './communication/padre/padre.component';

const routes: Routes = [{
    path: '',
    component: UsersComponent
},
{
    path:'details',
    component: UsersDetailsComponent
},
{
    path:'padre',
    component: PadreComponent
},
{
    path:'rick',
    component: RickAndMortyComponent
},
{
    path:'future',
    component: BackToTheFutureComponent
},
{
    path:'recovers',
    component: RecoversListComponent
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }

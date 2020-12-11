import { RecoverComponent } from './recover/recover.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { PadreComponent } from './communication/padre/padre.component';
import { RickAndMortyComponent } from './rickAndMorty/rick-and-morty.component';

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
    path:'recover',
    component: RecoverComponent
}


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }

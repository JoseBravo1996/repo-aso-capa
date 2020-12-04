import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadComponent } from '@modules/communication/dad/dad.component';
import { UsersDetailsComponent } from './user/users-details/users-details.component';
import { UsersComponent } from './user/users/users.component';

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
    component: DadComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule { }

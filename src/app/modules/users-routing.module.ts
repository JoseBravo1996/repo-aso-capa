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
}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }

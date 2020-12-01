import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from '@layout/body/body.component';

const routes: Routes = [{
  path: '',
  component: BodyComponent,
  children: [
    {
      path: '',
      loadChildren: () =>
        import('@modules/modules.module').then(m => m.ModulesModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

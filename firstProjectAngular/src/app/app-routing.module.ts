import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConstants } from './constants/RouterConstants';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
    ,
  },

  {
    path: RouteConstants.HOME,
    loadChildren: () =>
      import('../app/home/home.module').then((m) => m.HomeModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

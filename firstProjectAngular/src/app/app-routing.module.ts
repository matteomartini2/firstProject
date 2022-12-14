import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConstants } from './constants/RouterConstants';
import { HomeComponent } from './home/home.component';
import { AnagraficaComponent } from './anagrafica/anagrafica.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'anagrafica',
    component: AnagraficaComponent,
  },
  

  {
    path: RouteConstants.HOME,
    loadChildren: () =>
      import('../app/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: RouteConstants.ANAGRAFICA,
    loadChildren: () =>
      import('../app/anagrafica/anagrafica.module').then((m) => m.AnagraficaModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

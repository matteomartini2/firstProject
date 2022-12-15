import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConstants } from './constants/RouterConstants';
import { HomeComponent } from './home/home.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },

  {
    path: RouteConstants.PERSONAL_PROFILE,
    component: PersonalProfileComponent,
  },

  {
    path: RouteConstants.PERSONAL_PROFILE,
    loadChildren: () =>
      import('../app/personal-profile/personal-profile.module').then((m) => m.PersonalProfileModule),
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

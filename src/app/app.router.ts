/*
Imports
*/
// Angular
import { Routes } from '@angular/router';
//

/*
Export
*/
export const AppRouterModule: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'profil',
    component: ConnectedPageComponent
  },
  {
    path: 'register',
    component: FormRegisterComponent
  }];
//

// Inner
import { HomePageComponent } from './routes/home-page/home-page.component';
import { ConnectedPageComponent } from './routes/connected-page/connected-page.component';
import { FormRegisterComponent } from './shared/form-register/form-register.component';

import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';

export const appRoutes: Routes = [
  { path: '', 
    component: LoginComponent 
  },
  { path: 'signup',
    component: SignupComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

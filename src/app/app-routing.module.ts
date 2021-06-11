import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'registration2',
    loadChildren: () => import('./pages/registration2/registration2.module').then( m => m.Registration2PageModule)
  },
  {
    path: 'registration3',
    loadChildren: () => import('./pages/registration3/registration3.module').then( m => m.Registration3PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

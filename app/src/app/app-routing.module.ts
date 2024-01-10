import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full', title: 'DemoApp' },
  { path: 'login', component: LoginComponent, title: 'DemoApp Login' },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule), title: 'DemoApp Dashboard', canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

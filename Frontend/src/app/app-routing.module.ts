import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'showUsers',
    component: ShowUsersComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

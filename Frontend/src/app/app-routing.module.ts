import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { authGuard } from './guards/auth.guard';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { permissionGuard } from './guards/permission.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'showUsers',
    component: ShowUsersComponent,
    canActivate: [authGuard, permissionGuard]
  },
  {
    path: 'createUser',
    component: CreateUserComponent,
    canActivate: [authGuard, permissionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: "", redirectTo: "/admin/login", pathMatch: "full" },
  { path: "admin/login", component: LoginComponent },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      { path: "", component: ProfileComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "profile", component: ProfileComponent },
      { path: "users", component: UserComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

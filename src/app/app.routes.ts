import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", component: HomeComponent, canActivate:[authGuard] }
];

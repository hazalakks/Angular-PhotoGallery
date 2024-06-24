import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerFormGroup = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    returnSecureToken: new FormControl(true),
  })

  constructor(private _loginService: LoginService, private _router:Router) { }

  registerForm() {
    this._loginService.register(this.registerFormGroup.value).subscribe({
      next: (res) => {
        alert("Kayıt Başarılı!");
        this._router.navigateByUrl("login");
      },
      error: (err) => {
        alert("Kayıt Edilemedi" + err);
      },
      complete: () => {
        // Subscribe tamamandıktan sonra çalışır!!!
      }
    }

    )
  }
}

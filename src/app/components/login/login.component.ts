import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Login } from '../../model/login.model';
import { LoginService } from '../../services/login.service';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loading: boolean;
  form: FormGroup;

  constructor(private dialog: MatDialog,
    private loginService: LoginService,
    private appService: AppService,
    private route: Router) {
    this.loading = false;
    this.form = new FormGroup({
      user: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  login(): void {
    if (this.form.valid) {
      this.loading = true;
      var login = this.form.value as Login;
      this.loginService.login(login).subscribe({
        next: (data) => {
          if (data.error == 0) {
            this.route.navigate(['/menu/users']).then();
          } else {
            this.appService.showMessageDialog(this.dialog, 'Usuario y/o contraseña incorrecta');
          }
          this.loading = false;
        }, error: (error) => {
          this.loading = false;
          this.appService.showMessageDialog(this.dialog, 'Usuario y/o contraseña incorrecta');
        }
      });
    }
  }

}

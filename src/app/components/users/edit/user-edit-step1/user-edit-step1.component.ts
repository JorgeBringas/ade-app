import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../../model/user.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { MatSelectModule } from '@angular/material/select';
import { AppService } from '../../../../services/app.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-edit-step1',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './user-edit-step1.component.html',
  styleUrl: './user-edit-step1.component.css'
})
export class UserEditStep1Component implements OnInit {

  user: User;

  @Output()
  backEvent: EventEmitter<any>;
  @Output()
  nextEvent: EventEmitter<User>;

  form: FormGroup;

  constructor(private route: ActivatedRoute, private dialog: MatDialog,
    private appService: AppService, private userService: UserService) {
    this.user = {} as User;
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      paternal: new FormControl(null, [Validators.required]),
      maternal: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      client: new FormControl(null, [Validators.required]),
      area: new FormControl(null, [Validators.required]),
      validityDate: new FormControl(null, [Validators.required]),
      access: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required])
    });
    this.backEvent = new EventEmitter();
    this.nextEvent = new EventEmitter();
    console.log(this.user);
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => this.loadUser(param['id']));
  }

  back(): void {
    this.backEvent.emit();
  }

  next(): void {
    if (this.form.valid) {
      const endDate = this.form.value.validityDate;
      const user: User = this.form.value;
      user.endDate = endDate.getTime();
      this.nextEvent.emit(user);
    }
  }

  private loadUser(id: string): void {
    this.userService.getUser(id).subscribe({
      next: (data) => {
        if (data.error == 0) {
          this.user = data.user;
          const date = this.user.endDate;
          if (date > 0) {
            this.form.get('validityDate')?.setValue(new Date(this.user.endDate));
          } else {
            this.form.get('validityDate')?.setValue(new Date());
          }

          this.form.get('login')?.setValue(this.user.login);
          this.form.get('name')?.setValue(this.user.name);
          this.form.get('paternal')?.setValue(this.user.paternal);
          this.form.get('maternal')?.setValue(this.user.maternal);
          this.form.get('email')?.setValue(this.user.email);
          this.form.get('client')?.setValue(this.user.client);
          this.form.get('area')?.setValue(this.user.area);
          this.form.get('access')?.setValue(this.user.access);
          this.form.get('status')?.setValue(this.user.status);
        } else {
          this.appService.showMessageDialog(this.dialog, data.message);
        }
      }, error: (e) => {
        this.appService.showMessageDialog(this.dialog, e.message);
      }
    });
  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UserFilterRequest, UserList } from '../../model/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  form: FormGroup;
  users: Array<UserList>;

  constructor(
    private userService: UserService,
    private route: Router,
    private dialog: MatDialog,
    private appService: AppService) {
    this.form = new FormGroup({
      name: new FormControl(null),
      date1: new FormControl(new Date()),
      date2: new FormControl(new Date()),
      status: new FormControl("X")
    });
    this.users = [];
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  addUser(): void {
    this.route.navigate(['/menu/users/add']).then();
  }

  editUser(id: string): void {
    this.route.navigate(['/menu/users/edit/' + id]).then();
  }

  revoketUser(id: string): void {
    this.route.navigate(['/menu/users/revoke/' + id]).then();
  }

  loadUsers(): void {
    const d1 = this.form.value.date1;
    const d2 = this.form.value.date2;
    d1.setHours(0, 0, 0);
    d2.setHours(23, 59, 59);

    const values = this.form.value;
    const filter: UserFilterRequest = {
      name: values.name,
      date1: d1.getTime(),
      date2: d2.getTime(),
      status: values.status
    }

    this.userService.getUsers(filter).subscribe({
      next: (data) => {
        if (data.error == 0) {
          this.users = data.users;
        } else {
          this.appService.showMessageDialog(this.dialog, data.message);
        }
      },
      error: (e) => this.appService.showMessageDialog(this.dialog, e.message)
    });
  }

}

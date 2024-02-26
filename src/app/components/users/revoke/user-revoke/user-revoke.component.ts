import { Component, OnInit, Output } from '@angular/core';
import { User } from '../../../../model/user.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../../services/app.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-revoke',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule],
  templateUrl: './user-revoke.component.html',
  styleUrl: './user-revoke.component.css'
})
export class UserRevokeComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private dialog: MatDialog,
    private appService: AppService) {
    this.user = {} as User;
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => this.loadUser(param['id']));
  }

  back(): void {
    this.list();
  }

  next(): void {
    this.userService.revokeUser(this.user.login).subscribe({
      next: (data) => {
        if (data.error == 0) {
          this.list();
        }
      }, error: () => { }
    });
  }


  getName(): string {
    return this.user.name + ' ' + this.user.paternal + ' ' + this.user.maternal;
  }

  getDate(): Date {
    return new Date(this.user.endDate);
  }

  private loadUser(id: string): void {
    this.userService.getUser(id).subscribe({
      next: (data) => {
        if (data.error == 0) {
          this.user = data.user;
        } else {
          this.appService.showMessageDialog(this.dialog, data.message);
        }
      }, error: (e) => { this.appService.showMessageDialog(this.dialog, e.message); }
    });
  }

  list(): void {
    this.router.navigate(['/menu/users']).then();
  }

}

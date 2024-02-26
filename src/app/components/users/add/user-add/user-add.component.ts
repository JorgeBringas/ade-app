import { Component, OnInit } from '@angular/core';
import { User } from '../../../../model/user.model';
import { UserService } from '../../../../services/user.service';
import { StepperComponent } from '../../../shared/stepper/stepper.component';
import { UserAddStep1Component } from '../user-add-step1/user-add-step1.component';
import { UserAddStep2Component } from '../user-add-step2/user-add-step2.component';
import { UserAddStep3Component } from '../user-add-step3/user-add-step3.component';
import { Router } from '@angular/router';
import { AppService } from '../../../../services/app.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [
    StepperComponent,
    UserAddStep1Component,
    UserAddStep2Component,
    UserAddStep3Component
  ],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent implements OnInit {

  view: number;
  user: User;

  constructor(
    private userService: UserService,
    private route: Router,
    private dialog: MatDialog,
    private appService: AppService) {
    this.view = 1;
    this.user = {} as User;
  }

  ngOnInit(): void {
    this.step1();
  }


  step1() {
    this.view = 1;
  }

  step2(user: User) {
    this.view = 2;
    this.user = user;
  }

  step3() {
    this.userService.addUser(this.user).subscribe({
      next: (data) => {
        if (data.error === 0) {
          this.view = 3;
        } else {
          this.appService.showMessageDialog(this.dialog, data.message);
        }
      }, error: (e) => {
        this.appService.showMessageDialog(this.dialog, e.message);
      }
    });

  }

  list(): void {
    this.route.navigate(['/menu/users']).then();
  }

}

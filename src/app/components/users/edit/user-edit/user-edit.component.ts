import { Component } from '@angular/core';
import { User } from '../../../../model/user.model';
import { UserService } from '../../../../services/user.service';
import { StepperComponent } from '../../../shared/stepper/stepper.component';
import { UserEditStep1Component } from '../user-edit-step1/user-edit-step1.component';
import { UserEditStep2Component } from '../user-edit-step2/user-edit-step2.component';
import { UserEditStep3Component } from '../user-edit-step3/user-edit-step3.component';
import { Router } from '@angular/router';
import { AppService } from '../../../../services/app.service';
import { MatDialog } from '@angular/material/dialog';
import { NumericDirective } from '../../../shared/numeric.directive';
import { TextDirective } from '../../../shared/text.directive';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [
    StepperComponent,
    UserEditStep1Component,
    UserEditStep2Component,
    UserEditStep3Component,
    NumericDirective,
    TextDirective],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {

  view: number;
  user: User;


  constructor(
    private userService: UserService,
    private route: Router,
    private dialog: MatDialog,
    private appService: AppService
  ) {
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
    this.userService.editUser(this.user).subscribe({
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

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../model/user.model';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-edit-step2',
  standalone: true,
  imports: [CommonModule,
    MatButtonModule],
  templateUrl: './user-edit-step2.component.html',
  styleUrl: './user-edit-step2.component.css'
})
export class UserEditStep2Component {

  @Input()
  user: User;

  @Output()
  private backEvent: EventEmitter<any>;

  @Output()
  private nextevent: EventEmitter<any>;

  constructor() {
    this.backEvent = new EventEmitter();
    this.nextevent = new EventEmitter();
    this.user = {} as User;
  }

  back(): void {
    this.backEvent.emit();
  }

  next(): void {
    this.nextevent.emit();
  }

  getPassword(): string {
    if (this.user.password != null) {
      return 'xxxxxx' + this.user.password.substring(0, this.user.password.length - 2);
    } else {
      return "xxxxx";
    }
  }

  getName(): string {
    return this.user.name + ' ' + this.user.paternal + ' ' + this.user.maternal;
  }

  getDate(): Date {
    return new Date(this.user.endDate);
  }

}

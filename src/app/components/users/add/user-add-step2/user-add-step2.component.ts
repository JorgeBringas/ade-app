import { Component, EventEmitter, Input, Output, Pipe } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../../model/user.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-add-step2',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule],
  templateUrl: './user-add-step2.component.html',
  styleUrl: './user-add-step2.component.css'
})
export class UserAddStep2Component {

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
    return 'xxxxxx' + this.user.password.substring(0, this.user.password.length - 2);
  }

  getName(): string {
    return this.user.name + ' ' + this.user.paternal + ' ' + this.user.maternal;
  }

  getDate(): Date {
    return new Date(this.user.endDate);
  }


}

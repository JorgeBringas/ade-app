import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../model/user.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-edit-step3',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './user-edit-step3.component.html',
  styleUrl: './user-edit-step3.component.css'
})
export class UserEditStep3Component {

  @Input()
  user: User;

  @Output()
  nextEvent: EventEmitter<any>;

  constructor() {
    this.nextEvent = new EventEmitter();
    this.user = {} as User;
  }

  next(): void {
    this.nextEvent.emit();
  }

  getName(): string {
    return this.user.name + ' ' + this.user.paternal + ' ' + this.user.maternal;
  }


}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../../model/user.model';

@Component({
  selector: 'app-user-add-step3',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './user-add-step3.component.html',
  styleUrl: './user-add-step3.component.css'
})
export class UserAddStep3Component {

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

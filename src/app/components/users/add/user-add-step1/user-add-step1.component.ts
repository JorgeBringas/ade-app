import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../../model/user.model';
import { NumericDirective } from '../../../shared/numeric.directive';
import { TextDirective } from '../../../shared/text.directive';

@Component({
  selector: 'app-user-add-step1',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    NumericDirective,
    TextDirective
  ],
  templateUrl: './user-add-step1.component.html',
  styleUrl: './user-add-step1.component.css'
})
export class UserAddStep1Component {

  @Output()
  backEvent: EventEmitter<any>;

  @Output()
  nextEvent: EventEmitter<User>;

  form: FormGroup;
  minDate: Date;


  constructor() {
    this.minDate = new Date();
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      paternal: new FormControl(null, [Validators.required]),
      maternal: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      client: new FormControl(null, [Validators.required]),
      area: new FormControl(null, [Validators.required]),
      endDate: new FormControl(this.minDate, [Validators.required]),
      access: new FormControl(null, [Validators.required])
    });
    this.nextEvent = new EventEmitter();
    this.backEvent = new EventEmitter();
  }

  back():void{
    this.backEvent.emit();
  }

  next(): void {
    if (this.form.valid) {
      const endDate = this.form.value.endDate;
      const user: User = this.form.value;
      user.endDate = endDate.getTime();
      this.nextEvent.emit(user);
    }
  }

}

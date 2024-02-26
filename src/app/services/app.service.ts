import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/shared/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  loging: boolean = false;

  constructor() { }

  public showMessageDialog(dialog: MatDialog, message: string): void {
    dialog.open(DialogComponent, {
      width: '500px',
      data: message
    });
  }

  public setLogin(login: boolean): void {
    this.loging = login;
  }

  public isAuthenticated() {
    return new Promise((resolve, reject) => { resolve(this.loging); });
  }
}

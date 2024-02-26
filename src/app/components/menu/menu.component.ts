import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menuIndex: number;

  constructor(private route: Router) {
    this.menuIndex = 0;
  }

  users(): void {
    this.route.navigate(['/menu/users']).then();
    this.menuIndex = 1;
  }

}

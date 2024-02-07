import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @HostBinding('class.show-menu') showMenu: boolean = false;

  public toggleNavbar(): void {
    this.showMenu = !this.showMenu;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-plus',
  standalone: true,
  imports: [CommonModule,  RouterLink, RouterLinkActive],
  templateUrl: './navbar-plus.component.html',
  styleUrl: './navbar-plus.component.css'
})
export class NavbarPlusComponent {

}

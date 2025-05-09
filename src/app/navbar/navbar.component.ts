import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, IonIcon, CommonModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {


  ngOnInit(): void {
  }

  navbarVisible = false;  // Navbar visibility toggle


  // Toggle function
  toggleNavbar() {
    this.navbarVisible = !this.navbarVisible;
  }

}

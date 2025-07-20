import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-project',
  standalone: true,
  imports:[IonIcon, CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent  implements OnInit {

  isCardVisible = false;

  constructor() { }


  ngOnInit() {}


  toggleCard() {
    this.isCardVisible = !this.isCardVisible;
    if (this.isCardVisible) {
      // Wait for the view to update
      setTimeout(() => {
        const projectsSection = document.querySelector('.projects-container');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }
}

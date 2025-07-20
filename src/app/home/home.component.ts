import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective, RouterLink, IonIcon],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Function to trigger resume PDF download
  downloadPdf() {
    let link = document.createElement("a");
    link.href = "/resume.pdf";                      // Path to PDF file
    link.download = "Renu Jain Resume 2025.pdf";    // Filename for download
    link.click();                                   // Simulates user click to download
  }

};
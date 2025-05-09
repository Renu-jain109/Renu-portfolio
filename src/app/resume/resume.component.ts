import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, IonIcon],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  // Function to trigger resume PDF download
  downloadPdf() {
    let link = document.createElement("a");
    link.href = "/resume.pdf";                      // Path to PDF file
    link.download = "Renu Jain Resume 2025.pdf";    // Filename for download
    link.click();                                   // Simulates user click to download
  }
}

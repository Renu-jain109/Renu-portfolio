import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor() { }

   // Gets the current year dynamically
  currentYear: number = new Date().getFullYear();

  ngOnInit() { }

}

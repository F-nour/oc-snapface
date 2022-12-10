import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  userEmail!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(): void {
    console.log(this.userEmail);
  }
}

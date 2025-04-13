import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  showImage: boolean = true;
  constructor() {
    this.showImage = window.innerWidth > 991;
  }

  onResize(event: any) {
    this.showImage = event.target.innerWidth > 991;
  }
}

import { Component } from '@angular/core';
import { AnimationDirection } from 'moving-line';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFirstContent = false;
  showSecondContent = false;

  firstDirections: AnimationDirection[] = [
    AnimationDirection.Downward,
    AnimationDirection.Rightward,
  ]

  secondDirections: AnimationDirection[] = [
    AnimationDirection.Leftward,
    AnimationDirection.Upward,
  ]

  firstContent = `
    <h1>Hello World</h1>
    <p>This is embedded by the parent component</p>
  `;
  secondContent = `
    <h1>This is the second container</h1>
    <p>This content is also embedded by the parent component</p>
  `;

  constructor() {
    setTimeout(() => {
      this.showFirstContent = true;

      setTimeout(() => {
        this.showSecondContent = true;
      }, 1600);
    }, 1000);
  }
}

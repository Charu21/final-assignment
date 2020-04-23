import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Passing title from parent to child
  title = 'Space Application';
  fancyAppEventTriggered: boolean = false;

  fancyApp() {
    this.fancyAppEventTriggered = !this.fancyAppEventTriggered;
  }
}

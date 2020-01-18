import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Property for the password and to bind it
  // Same as a constructor init.
  password = '';

  // Button clicked handler and allows us to continue using it.
  onButtonClick() {
    this.password = "AJDIOJASD";
  }
}

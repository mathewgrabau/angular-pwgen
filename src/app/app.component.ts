import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  // Property for the password and to bind it
  // Same as a constructor init.
  password = '';

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  // Button clicked handler and allows us to continue using it.
  onButtonClick() {
    console.log(`
      About to generate a password:
      ${this.includeLetters}
      ${this.includeNumbers}
      ${this.includeSymbols}
    `);
    this.password = "AJDIOJASD";
  }


}

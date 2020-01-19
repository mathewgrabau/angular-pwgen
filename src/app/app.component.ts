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
  length = 0;
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

  // The method is accepting the value that is being done
  onInputLength(value : string) {
    const parsedValue = parseInt(value);

    // Ensure the input is valid
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  // Button clicked handler and allows us to continue using it.
  onButtonClick() {
  }


}

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
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    // Generate some randoms now
    for (let i = 0; i < this.length; ++i) {
      // Compute the index and apply it
      const c = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[c];
    }

    this.password = generatedPassword;
  }


}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  // NgModel
  username = '';

  // Create a FormGroup for the form
  usernameForm = new FormGroup({
    username: new FormControl('', [
      Validators.required, // Field is required
      Validators.minLength(3), // Minimum length of 3 characters
    ]),
    age: new FormControl<number | null>(null, [Validators.required]),
  });

  // Getter for easy access to the username control
  get usernameControl() {
    return this.usernameForm.get('username');
  }

  onSubmit() {
    if (this.usernameForm.valid) {
      alert(`Submitted: ${this.usernameForm.value}`);
    }
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  messageText = 'Interpolation syntax is {{ your property }}';
  isDisabled = true;
  username = '';

  toggleButton() {
    this.isDisabled = !this.isDisabled;
  }
  clearUserName() {
    this.username = '';
  }
}

import { Component } from '@angular/core';
import { ClickColorDirective } from './click-color.directive';
import { ShowEvenDirective } from './show-even.directive';

@Component({
  selector: 'app-directives',
  imports: [ClickColorDirective, ShowEvenDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {
  counter = 2;

  increaseCounter() {
    this.counter = this.counter + 1;
  }
}

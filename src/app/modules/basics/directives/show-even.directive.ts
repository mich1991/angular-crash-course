import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowEven]',
})
export class ShowEvenDirective {
  // Input to take the number to check for evenness
  @Input() set appShowEven(number: number) {
    if (number % 2 === 0) {
      // If the number is even, add the element to the DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // Otherwise, remove the element from the DOM
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}

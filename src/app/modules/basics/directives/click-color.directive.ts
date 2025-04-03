import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickColor]',
})
export class ClickColorDirective {
  private originalColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Store the original text color of the element
    this.originalColor = this.el.nativeElement.style.color || 'black';
  }

  // Listen for the 'click' event
  @HostListener('click') onClick() {
    this.changeColor('red'); // Change text color to red when clicked
    this.restoreColorAfterTimeout(); // Start timer to restore color after 1 second
  }

  // Change the color of the element
  private changeColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

  // Restore the original color after a timeout
  private restoreColorAfterTimeout() {
    setTimeout(() => {
      this.changeColor(this.originalColor); // Restore the original color
    }, 1000); // 1 second delay
  }
}

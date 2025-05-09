import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective implements AfterViewInit {

  @Input('appScrollAnimate') animationClass = 'fade-in'; // Animation class to apply

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    // Add initial animation class
    this.el.nativeElement.classList.add(this.animationClass);

    // Create IntersectionObserver to trigger animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            // Add animation and show class when element is in view
            (entry.target as HTMLElement).classList.add(this.animationClass, 'show');
            observer.unobserve(entry.target); // Stop observing after first trigger
          }
        });
      },
      { threshold: 0.2 }  // Trigger when 20% of the element is visible
    );

    // Start observing the element
    observer.observe(this.el.nativeElement);
  }
}

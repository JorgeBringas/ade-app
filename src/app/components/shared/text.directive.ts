import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appText]',
  standalone: true
})
export class TextDirective {

  private regex: RegExp = new RegExp(/^[a-zA-Z0-9.@, ]*$/);

  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Delete'];

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

}

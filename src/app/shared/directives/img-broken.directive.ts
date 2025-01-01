import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  @Input() customImg: string | null = '';
  @HostListener('error') onError(): void {
    const elNative = this.elHost.nativeElement as HTMLImageElement;
    elNative.src = this.customImg || 'https://via.placeholder.com/150';
  }

  constructor(private elHost: ElementRef) {}
  // constructor(private elHost: ElementRef) {
  //   console.log('el host', elHost.nativeElement);
  // }
}

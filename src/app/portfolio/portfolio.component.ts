import { Component, HostListener } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-portfolio',
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  images: string[] = [
    "/imgs/poert1.png",
    "/imgs/port2.png",
    "/imgs/port3.png",
    "/imgs/poert1.png",
    "/imgs/port2.png",
    "/imgs/port3.png",
  ]
  indexx: number = 0;
  srcimg: string = '';
  flag: boolean = true;
  showContainer(src: string, index: number): void {
    this.srcimg = src;
    this.flag = false;
    this.indexx = index;
  }

  slide(step: number): void {
    this.indexx = this.indexx + step;
    if (this.indexx < 0) {
      this.indexx = this.images.length - 1;
    }
    else if (this.indexx === this.images.length) {
      this.indexx = 0;
    }
    this.srcimg = this.images[this.indexx];
  }

  closeSlie(eInfo: MouseEvent): void {
    this.flag = true;
  }

  notCloseSlie(eInfo: MouseEvent): void {
    eInfo.stopPropagation();
  }



  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.slide(1);
    } else if (event.key === 'ArrowLeft') {
      this.slide(-1);
    }
  }
}

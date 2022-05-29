import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(private titleService: Title) { }

  ngOnInit(): void {
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

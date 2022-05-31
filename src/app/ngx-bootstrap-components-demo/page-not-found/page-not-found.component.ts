import { Component, OnInit, OnChanges, DoCheck,OnDestroy,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  title ='PAGE NOT FOUND';
  constructor() {
    console.log('Constructor called!!');
   }

  ngOnInit(): void {
    console.log('ngOnInit called!!');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges called!!');
  }

  ngAfterContentInit(): void {

    console.log('ngAfterContentInit called!!');

  }

  ngAfterContentChecked(): void {

    console.log('ngAfterContentChecked called!!');

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called!!');
    
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called!!');
    
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!!');
    
  }


}

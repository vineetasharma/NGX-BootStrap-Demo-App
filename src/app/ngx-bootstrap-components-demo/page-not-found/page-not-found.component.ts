import { Component, OnInit, OnChanges, DoCheck,OnDestroy,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked } from '@angular/core';
import { Observable, Observer} from 'rxjs'


@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  title ='PAGE NOT FOUND';
  greeting: Promise<string>|null = null;
  arrived: boolean = false;

  private resolve: Function|null = null;

  constructor() {
    console.log('Constructor called!!');
    this.reset();
   }

   time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  
   reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }

  ngOnInit(): void {
    let counter= 0;
    setTimeout(()=>{
      this.resolve!(++counter);
    },1500);
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

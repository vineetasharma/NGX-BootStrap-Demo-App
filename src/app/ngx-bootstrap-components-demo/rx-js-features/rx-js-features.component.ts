import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-rx-js-features',
  templateUrl: './rx-js-features.component.html',
  styleUrls: ['./rx-js-features.component.css']
})
export class RxJsFeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    forkJoin(
      // as of RxJS 6.5+ we can use a dictionary of sources
      {
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
        users: ajax.getJSON('https://api.github.com/users')
      }
    )
      // { google: object, microsoft: object, users: array }
      .subscribe(console.log);
  }

}

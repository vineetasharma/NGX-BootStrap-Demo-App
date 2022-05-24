import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-ng-formly-demo',
  templateUrl: './ng-formly-demo.component.html',
  styleUrls: ['./ng-formly-demo.component.css']
})
export class NgFormlyDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Full Name',
        placeholder: 'Enter full Name!!',
        required: true,
      }
    }
  ];

  onSubmit(model:any) {
    console.log(model);
  }

}

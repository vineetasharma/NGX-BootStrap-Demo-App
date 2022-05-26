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
      },
      expressionProperties: {
        'templateOptions.disabled': (model: any, formState: any, field) => {
          console.log('Model------',model,formState,field, this.model);
          // access to the main model can be through `this.model` or `formState` or `model
          return !(model && model.email);
        },
      }
    },
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Hey!'
      },
      expressionProperties: {
        'templateOptions.disabled': '!model.name',
        'templateOptions.placeholder': 'model.name ? "Enter text here" : "This one is disabled if there is no Name"'
      },
    },
    {
      key: 'address',
      wrappers: ['panel'],
      templateOptions: { label: 'Address' },
      fieldGroup: [{
        key: 'city',
        type: 'input',
        templateOptions: {
          required: true,
          type: 'text',
          label: 'City',
        },
      },
      {
        key: 'town',
        type: 'input',
        templateOptions: {
          required: true,
          type: 'text',
          label: 'Town',
        },
      }],
     },
  ];

  onSubmit(model:any) {
    console.log(model);
  }

}

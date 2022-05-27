import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ValidationErrors} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';


export function IpValidator(control: FormControl): ValidationErrors {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? {} : { 'ip': true };
}

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
     {
      key: 'ipNgModule',
      type: 'input',
      templateOptions: {
        label: 'IP Address (using custom validation declared in ngModule)',
        required: true,
      },
      validators: {
        validation: ['ip'],
      },
    },
    {
      key: 'ipValidators',
      type: 'input',
      templateOptions: {
        label: 'IP Address (using custom validation through `validators.validation` property)',
        required: true,
      },
      validators: {
        validation: [IpValidator],
      },
    },
    {
      key: 'ip',
      type: 'input',
      templateOptions: {
        label: 'IP Address (using custom validation through `validators.expression` property)',
        description: 'custom validation message through `validators` property',
        required: true,
      },
      validators: {
        ip: {
          expression: (c:any) => !c.value || /(\d{1,3}\.){3}\d{1,3}/.test(c.value),
          message: (error: any, field: FormlyFieldConfig) => `"${field?.formControl?.value}" is not a valid IP Address from json`,
        },
      },
    },
  ];

  onSubmit(model:any) {
    console.log(model);
  }

}

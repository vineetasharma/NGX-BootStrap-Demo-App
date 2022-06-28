import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig} from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormControl, ValidationErrors} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import "@angular/compiler";

import { AccordionComponent } from './ngx-bootstrap-components-demo/accordion/accordion.component';
import { AnimatedAccordionComponent} from './ngx-bootstrap-components-demo/animated-accordion/animated-accordion.component';
import { CarouselComponent } from './ngx-bootstrap-components-demo/carousel/carousel.component';
import { PageNotFoundComponent } from './ngx-bootstrap-components-demo/page-not-found/page-not-found.component';
import { NgFormlyDemoComponent } from './ngx-bootstrap-components-demo/ng-formly-demo/ng-formly-demo.component'
import { PanelWrapperComponent } from './ngx-bootstrap-components-demo/ng-formly-demo/panel-wrapper.component';
import { RxJsFeaturesComponent } from './ngx-bootstrap-components-demo/rx-js-features/rx-js-features.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { HighlightDirective } from './ngx-bootstrap-components-demo/highlight.directive';

export function IpValidator(control: AbstractControl): ValidationErrors {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? { ip: false} : { 'ip': true };
}

export function IpValidatorMessage(err:any, field: FormlyFieldConfig) {
  return `"${field?.formControl?.value}" is not a valid IP Address from Ng Module`;
}

const routes: Routes =[
  {path: 'accordion', component: AccordionComponent},
  {path: 'animated-accordion', component: AnimatedAccordionComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: '', component: AccordionComponent},
  {path: 'ng-formly-demo', component: NgFormlyDemoComponent},
  {path: 'rx-js-features', component:RxJsFeaturesComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    FormlyModule.forRoot({ wrappers: [
      { name: 'panel', component: PanelWrapperComponent },
    ], extras: { lazyRender: true },
    validators: [
      { name: 'ip', validation: IpValidator },
    ],
    validationMessages: [
      { name: 'ip', message: IpValidatorMessage },
      { name: 'required', message: 'This field is required' },
    ], }),
    FormlyBootstrapModule,
    BrowserAnimationsModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AccordionComponent,
    AnimatedAccordionComponent,
    CarouselComponent,
    PageNotFoundComponent,
    NgFormlyDemoComponent,
    PanelWrapperComponent,
    ExponentialStrengthPipe,
    HighlightDirective,
    RxJsFeaturesComponent
  ]
})
export class AppRoutingModule { }

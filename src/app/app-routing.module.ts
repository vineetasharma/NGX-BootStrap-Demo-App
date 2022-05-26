import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import "@angular/compiler";

import { AccordionComponent } from './ngx-bootstrap-components-demo/accordion/accordion.component';
import { AnimatedAccordionComponent} from './ngx-bootstrap-components-demo/animated-accordion/animated-accordion.component';
import { CarouselComponent } from './ngx-bootstrap-components-demo/carousel/carousel.component';
import { PageNotFoundComponent } from './ngx-bootstrap-components-demo/page-not-found/page-not-found.component';
import { NgFormlyDemoComponent } from './ngx-bootstrap-components-demo/ng-formly-demo/ng-formly-demo.component'
import { PanelWrapperComponent } from './ngx-bootstrap-components-demo/ng-formly-demo/panel-wrapper.component';
const routes: Routes =[
  {path: 'accordion', component: AccordionComponent},
  {path: 'animated-accordion', component: AnimatedAccordionComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: '', component: AccordionComponent},
  {path: 'ng-formly-demo', component: NgFormlyDemoComponent},
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
    ], extras: { lazyRender: true } }),
    FormlyBootstrapModule
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
    PanelWrapperComponent
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AccordionComponent } from './ngx-bootstrap-components-demo/accordion/accordion.component';
import { AnimatedAccordionComponent} from './ngx-bootstrap-components-demo/animated-accordion/animated-accordion.component';
import { CarouselComponent } from './ngx-bootstrap-components-demo/carousel/carousel.component'

const routes: Routes =[
  {path: 'accordion', component: AccordionComponent},
  {path: 'animated-accordion', component: AnimatedAccordionComponent},
  {path: 'carousel', component: CarouselComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AccordionModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AccordionComponent,
    AnimatedAccordionComponent,
    CarouselComponent
  ]
})
export class AppRoutingModule { }

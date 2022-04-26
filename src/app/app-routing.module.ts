import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccordionModule} from 'ngx-bootstrap/accordion';

import { AccordionComponent } from './ngx-bootstrap-components-demo/accordion/accordion.component';

const routes: Routes =[
  {path: 'accordion', component: AccordionComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AccordionModule.forRoot()],
  exports: [
    RouterModule
  ],
  declarations: [
    AccordionComponent
  ]
})
export class AppRoutingModule { }

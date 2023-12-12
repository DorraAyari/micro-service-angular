import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BocRoutingRoutingModule } from './boc-routing-routing.module';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BocRoutingRoutingModule,


  ],
  schemas: [

  CUSTOM_ELEMENTS_SCHEMA
  ],



providers: [

],
bootstrap: [AppComponent]
})
export class BocRoutingModule { }

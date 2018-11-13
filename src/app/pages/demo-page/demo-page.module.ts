import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPageComponent } from './demo-page/demo-page.component';
import {DemoPageRoutingModule} from "./demo-page-routing.module";

@NgModule({
  declarations: [DemoPageComponent],
  imports: [
    CommonModule,
    DemoPageRoutingModule
  ]
})
export class DemoPageModule { }

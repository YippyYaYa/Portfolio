import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }

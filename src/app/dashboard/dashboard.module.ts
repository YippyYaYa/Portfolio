import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/shared/shared.module';

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

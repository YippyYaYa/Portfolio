import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/shared/shared.module';
import { HomeRouteModule } from './home.route';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRouteModule
  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

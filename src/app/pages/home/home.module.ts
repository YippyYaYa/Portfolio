import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/shared/shared.module';
import { HomeRouteModule } from './home.route';
import { AboutModule } from '../about/about.module';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRouteModule,
    AboutModule,
    ServicesModule,
  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

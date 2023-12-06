import { NgModule } from '@angular/core';

import { ServicesComponent } from './services.component';
import { SharedModule } from 'src/shared/shared.module';
import { ServicesRouteModule } from './services.route';

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    SharedModule,
    ServicesRouteModule
  ],
  providers: [],
  exports: [
    ServicesComponent
  ]
})
export class ServicesModule { }

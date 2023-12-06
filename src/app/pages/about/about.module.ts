import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';
import { SharedModule } from 'src/shared/shared.module';
import { AboutRouteModule } from './about.route';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    SharedModule,
    AboutRouteModule
  ],
  providers: [],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }

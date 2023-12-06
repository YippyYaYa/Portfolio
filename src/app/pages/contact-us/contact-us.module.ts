import { NgModule } from '@angular/core';

import { ContactUsComponent } from './contact-us.component';
import { SharedModule } from 'src/shared/shared.module';
import { ContactUsRouteModule } from './contact-us.route';

@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    SharedModule,
    ContactUsRouteModule
  ],
  providers: [],
  exports: [
    ContactUsComponent
  ]
})
export class ContactUsModule { }

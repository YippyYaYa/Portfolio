import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }

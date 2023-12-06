import { NgModule } from '@angular/core';

import { GalleryComponent } from './gallery.component';
import { SharedModule } from 'src/shared/shared.module';
import { GalleryRouteModule } from './gallery.route';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    SharedModule,
    GalleryRouteModule
  ],
  providers: [],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }

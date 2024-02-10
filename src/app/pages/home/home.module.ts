import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/shared/shared.module';
import { HomeRouteModule } from './home.route';
import { AboutModule } from '../about/about.module';
import { ServicesModule } from '../services/services.module';
import { GalleryModule } from '../gallery/gallery.module';
import { ContactUsModule } from '../contact-us/contact-us.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRouteModule,
    AboutModule,
    ServicesModule,
    GalleryModule,
    ContactUsModule
  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

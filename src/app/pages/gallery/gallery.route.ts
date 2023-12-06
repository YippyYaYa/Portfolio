import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GalleryComponent } from "./gallery.component";

export const galleryRoutes: Routes = [
  {
    path: '',
    component: GalleryComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(galleryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GalleryRouteModule { }
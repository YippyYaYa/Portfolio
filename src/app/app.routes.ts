import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabTitles } from "./../shared/constants/dashboard/dashboard.constants";

export const routes: Routes = [
  { path: '', redirectTo: '/' + TabTitles.HOME, pathMatch: 'full' },
  {
    path: TabTitles.HOME,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: TabTitles.ABOUT,
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: TabTitles.CONTACTUS,
    loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: TabTitles.GALLERY,
    loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: TabTitles.SERVICES,
    loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouteModule { }
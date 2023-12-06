import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServicesComponent } from "./services.component";

export const servicesRoutes: Routes = [
  {
    path: '',
    component: ServicesComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(servicesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ServicesRouteModule { }
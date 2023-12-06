import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [
    RouterModule,
    CommonModule,
  ]
})
export class SharedModule { }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TabTitles } from '../constants/dashboard/dashboard.constants';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  public readonly activeTab = new BehaviorSubject(TabTitles.HOME);

  constructor(private router: Router) {
    // router.events.filter((event: any) => event instanceof NavigationEnd)
    //   .subscribe((event: { url: TabTitles; }) => {
    //     this.activeTab.next(event.url);
    //     console.log(event);
    //   });
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        if(e.url.toUpperCase().indexOf('HOME') !== -1) {
          this.activeTab.next(TabTitles.HOME);
        }
        else if(e.url.toUpperCase().indexOf('ABOUT') !== -1) {
          this.activeTab.next(TabTitles.ABOUT);
        }
        else if(e.url.toUpperCase().indexOf('SERVICES') !== -1) {
          this.activeTab.next(TabTitles.SERVICES);
        }
        else if(e.url.toUpperCase().indexOf('GALLERY') !== -1) {
          this.activeTab.next(TabTitles.GALLERY);
        }
        else if(e.url.toUpperCase().indexOf('CONTACT') !== -1) {
          this.activeTab.next(TabTitles.CONTACTUS);
        }
        else {
          // error
        }
      }
    })
  }
}
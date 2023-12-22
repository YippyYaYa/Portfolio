import { Component } from '@angular/core';
import { TabTitles } from 'src/shared/constants/dashboard/dashboard.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  readonly TabTitles = TabTitles;
  tabHeader: Array<TabTitles> = Object.values(TabTitles);

  routeTo(tab: TabTitles) {
    switch (tab) {

      case TabTitles.HOME: {
        break;
      }

      case TabTitles.ABOUT: {
        break;
      }

      case TabTitles.GALLERY: {
        break;
      }

      case TabTitles.SERVICES: {
        break;
      }

      case TabTitles.CONTACTUS: {
        break;
      }

      default: {
        console.error({message: 'Invalid Tab Selected'});
        break;
      }
    }
  }
}

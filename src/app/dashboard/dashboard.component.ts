import { Component } from '@angular/core';
import { TabTitles } from '@shared/constants/dashboard/dashboard.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  readonly TabTitles = TabTitles;
  tabHeader: Array<TabTitles> = Object.values(TabTitles);

  constructor(
    
  ) {

  }
}

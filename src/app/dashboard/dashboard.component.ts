import { Component } from '@angular/core';
import { TabTitles } from 'src/shared/constants/dashboard/dashboard.constants';
import { DashboardService } from '../../shared/services/dashboard.service';

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

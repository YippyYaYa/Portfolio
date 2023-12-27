import { Component } from '@angular/core';
import { DashboardService } from '../shared/services/dashboard.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  constructor(
    private dashboardService: DashboardService
  ) {
  }
}

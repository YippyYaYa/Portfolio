import { Component } from '@angular/core';
import { TabTitles } from '@shared/constants/dashboard/dashboard.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly TabTitles = TabTitles;
  tabHeader: Array<TabTitles> = Object.values(TabTitles);
  showMore = false;

}

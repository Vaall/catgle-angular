import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  AfterViewInit
} from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactBanner } from './react-app';

@Component({
  selector: 'app-react-banner',
  template: '<div [id]="rootId"></div>'
})
export class ReactBannerComponent implements OnChanges, AfterViewInit {
  @Input() name: string;
  @Output() submitEvent = new EventEmitter<string>();

  constructor(
    private router: Router
  ) { }

  public rootId = 'react-banner-root';
  private hasViewLoaded = false;

  public ngOnChanges() {
    this.renderComponent();
  }

  public ngAfterViewInit() {
    this.hasViewLoaded = true;
    this.renderComponent();
  }

  private renderComponent() {
    if (!this.hasViewLoaded) {
      return;
    }

    this.router.events.subscribe((routeData: NavigationEnd) => {
      if (routeData.url) {
        ReactDOM.render(
          React.createElement(ReactBanner, { routerData: routeData.url }),
          document.getElementById(this.rootId)
        );
      }
    });


  }
}


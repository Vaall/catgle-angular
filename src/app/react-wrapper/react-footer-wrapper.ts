import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  AfterViewInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactFooter, ReactWrapper } from './react-app/index';

@Component({
  selector: 'app-react-footer',
  template: '<div [id]="rootId"></div>'
})
export class ReactFooterComponent implements OnChanges, AfterViewInit {
  @Input() name: string;
  @Output() submitEvent = new EventEmitter<string>();

  constructor(
    private router: Router
  ) { }

  public rootId = 'react-footer-root';
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

    ReactDOM.render(
      React.createElement(ReactFooter),
      document.getElementById(this.rootId)
    );
  }
}

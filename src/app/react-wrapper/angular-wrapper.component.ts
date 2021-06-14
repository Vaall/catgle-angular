import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  AfterViewInit
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactWrapper } from './react-app/index';

@Component({
  selector: 'app-react-feeling-form',
  template: '<div [id]="rootId"></div>'
})
export class ReactFeelingFormComponent implements OnChanges, AfterViewInit {
  @Input() name: string;
  @Output() submitEvent = new EventEmitter<string>();

  public rootId = 'feeling-form-root';
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
      React.createElement(ReactWrapper),
      document.getElementById(this.rootId)
    );
  }
}

import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Action,
  RevenueAdjustment,
  RevenueAdjustmentActionType,
  RevenueAdjustmentFieldType,
  RevenueAdjustmentsItem,
  REVENUE_ADJUSTMENTS_ACTIONS,
  REVENUE_ADJUSTMENTS_FORM_DATA,
  FORM_REVENUE_ADJUSTMENT_VALUES,
  DEFUALT_REVENUE_ADJUSTMENT_ITEM
} from './constants';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnChanges {
  @Input() taxonomy: any;
  @Input() data: RevenueAdjustment;
  @Input() isNew: boolean;
  @Input() isCopied: boolean;
  @Output() onActionTriggered = new EventEmitter<Action>();
  dropdownData = {};
  revenueAdjustmentForm: FormGroup = new FormGroup({});
  revenueAdjustmentFormData = REVENUE_ADJUSTMENTS_FORM_DATA;
  revenueAdjustmentActions = REVENUE_ADJUSTMENTS_ACTIONS;
  controlsReady: boolean = false;

  ngOnChanges(): void {
    if (this.taxonomy && this.data) {
      this.initFormData();
    }
  }

  /**
   * Returns RevenueAdjustmentFieldType enum
   */
  get FieldType(): typeof RevenueAdjustmentFieldType {
    return RevenueAdjustmentFieldType;
  }

  /**
   * Form data initialization
   */
  private initFormData(): void {
    this.revenueAdjustmentFormData.map((item) => {
      this.setUpControl(item);
      this.handleFormControlChanges(item);
    });
    this.controlsReady = true;
  }

  /**
   * This method creates a form control and adds it to a form group
   * @param item
   */
  private setUpControl(item: RevenueAdjustmentsItem): void {
    const control = new FormControl(this.data[item.field], item.validators);
    if (item.type === RevenueAdjustmentFieldType.dropdown) {
      if (item.isDisabled && !this.data[item.previousField]) {
        control.disable();
      }
      if (item.dropdownData.initialFilter) {
        item.dropdownData.arrayData = this.taxonomy[item.dropdownData.sourceData].filter(
          item.dropdownData.initialFilter
        );
      } else {
        item.dropdownData.arrayData = this.taxonomy[item.dropdownData.sourceData];
      }
      if (this.data[item.previousField]) {
        this.handleFilters(item, this.data[item.previousField]);
      } else {
        this.dropdownData[item.dropdownData.sourceData] = item.dropdownData.arrayData;
      }
    }
    if (item.type === RevenueAdjustmentFieldType.currency && item.isDisabled) {
      control.disable();
    }
    this.revenueAdjustmentForm.addControl(`${item.field}_${this.data.id}`, control);
  }

  /**
   *
   * @param item
   */
  private handleFormControlChanges(item: RevenueAdjustmentsItem) {
    if (item.type === RevenueAdjustmentFieldType.dropdown) {
      this.revenueAdjustmentForm.get(`${item.field}_${this.data.id}`).valueChanges.subscribe((value) => {
        if (value) {
          this.handleDropdownCascade(item, value);
        }
      });
    }
    if (item.type === RevenueAdjustmentFieldType.currency) {
      this.revenueAdjustmentForm.valueChanges.subscribe((value) => {
        const total = [];
        this.revenueAdjustmentFormData
          .filter((formField) => formField.sumTotal)
          .map((formField) => {
            if (typeof value[`${formField.field}_${this.data.id}`] === 'number') {
              total.push(value[`${formField.field}_${this.data.id}`])
            }
          });
        if (this.revenueAdjustmentForm.get(`totalValue_${this.data.id}`)) {
          this.revenueAdjustmentForm
            .get(`totalValue_${this.data.id}`)
            .setValue(total.reduce((a, b) => a + b, 0), { emitEvent: false });
        }
      });
    }
  }

  /**
   *
   * @param item
   * @param value
   */
  private handleDropdownCascade(item: RevenueAdjustmentsItem, value: string | number) {
    item.dropdownData.cascadeFields.map((field, index) => {
      const nextControl = this.getControlByFieldName(field);
      const nextItem = this.revenueAdjustmentFormData.find((data) => data.field === field);
      nextControl.reset();
      if (index === 0) {
        this.handleFilters(nextItem, value);
        nextControl.enable();
      } else {
        nextControl.disable();
      }
    });
  }

  /**
   *
   * @param item
   * @param value
   */
  private handleFilters(item: RevenueAdjustmentsItem, value: string | number) {
    this.dropdownData[item.dropdownData.sourceData] = item.dropdownData.handler(
      value, item.dropdownData.arrayData
    );
  }

  /**
   * This methods returns an abstract control
   * @param item
   * @returns Abstract Control
   */
  public getControlByFieldName(field: string): AbstractControl {
    return this.revenueAdjustmentForm.controls[`${field}_${this.data.id}`];
  }

  public handleAction(action: RevenueAdjustmentActionType) {
    if (action === RevenueAdjustmentActionType.save) {
      this.revenueAdjustmentForm.markAsPristine();
    }
    this.onActionTriggered.emit({
      type: action,
      isNew: this.isNew,
      id: this.data.id,
      updatedItem: this.getUpdatedItem(),
      item: this.data,
      isCopied: this.isCopied
    });
  }

  private getUpdatedItem(): RevenueAdjustment {
    let updatedItem: RevenueAdjustment = DEFUALT_REVENUE_ADJUSTMENT_ITEM(this.data.id);

    FORM_REVENUE_ADJUSTMENT_VALUES(this.data.id).map((field) => {
      const key = Object.keys(field)[0];
      updatedItem[key] = this.revenueAdjustmentForm.controls[field[key]].value
    });

    return updatedItem;
  }

  public getErrorMessage(control: AbstractControl) {
    if (control.errors.minError) {
      return 'Value must be greater or equal to 0';
    }
    else {
      return 'Field is required';
    }
  }
}

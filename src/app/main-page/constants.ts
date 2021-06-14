import { FormGroup, ValidatorFn, Validators } from "@angular/forms";

export enum RevenueAdjustmentFieldType {
  dropdown = 1,
  currency
}

export interface Action {
  type: RevenueAdjustmentActionType,
  isNew: boolean;
  isCopied: boolean;
  id: number;
  item: RevenueAdjustment;
  updatedItem: RevenueAdjustment;
}

interface DropdownData {
  cascadeFields: string[];
  textField: string;
  valueField: string;
  sourceData: string;
  arrayData: unknown[];
  filteredArrayData?: unknown[];
  handler?: (value: any, array: any) => unknown[];
  initialFilter?: (value: any) => boolean;
}

export enum RevenueAdjustmentActionType {
  delete = 1,
  copy,
  save,
}

export const DEFUALT_REVENUE_ADJUSTMENT_ITEM = (id?: number) => ({
  businessAreaCode: null,
  businessLineCode: null,
  businessCode: null,
  impactValue: 0,
  totalValue: 0,
  incurredValue: 0,
  adjustmentValue: 0,
  id: id || null,
});

export const FORM_REVENUE_ADJUSTMENT_VALUES = (id: number) => ([
  { businessCode: `businessCode_${id}` },
  { businessAreaCode: `businessAreaCode_${id}` },
  { businessLineCode: `businessLineCode_${id}` },
  { impactValue: `impactValue_${id}` },
  { incurredValue: `incurredValue_${id}` },
  { adjustmentValue: `adjustmentValue_${id}` },
  { totalValue: `totalValue_${id}` },
]);

export const REVENUE_ADJUSTMENTS_ACTIONS = [
  {
    tooltip: 'Save',
    icon: 'k-icon k-i-save',
    hidden: (formData: FormGroup, isNew: boolean, isCopied: boolean) => (
      formData.pristine
    ),
    isDisabled: (formGroupValid: boolean) => !formGroupValid,
    type: RevenueAdjustmentActionType.save
  },
  {
    tooltip: 'Remove',
    icon: 'k-icon k-i-delete',
    hidden: (formData: FormGroup, isNew: boolean) => false,
    isDisabled: () => false,
    type: RevenueAdjustmentActionType.delete
  },
  {
    tooltip: 'Copy',
    icon: 'k-icon k-i-copy',
    hidden: (formData: FormGroup, isNew: boolean, isCopied: boolean) => ((isNew && !isCopied)),
    isDisabled: () => false,
    type: RevenueAdjustmentActionType.copy
  }
]

export interface RevenueAdjustmentsItem {
  label: string;
  field: string;
  previousField: string;
  type: RevenueAdjustmentFieldType;
  isDisabled: boolean;
  sumTotal: boolean;
  dropdownData?: DropdownData;
  validators: ValidatorFn[];
}

export const REVENUE_ADJUSTMENTS_FORM_DATA: RevenueAdjustmentsItem[] = [
  {
    label: 'Business',
    field: 'businessCode',
    previousField: null,
    type: RevenueAdjustmentFieldType.dropdown,
    isDisabled: false,
    sumTotal: false,
    validators: [Validators.required],
    dropdownData: {
      cascadeFields: ['businessAreaCode', 'businessLineCode'],
      textField: 'businessText',
      valueField: 'businessCode',
      sourceData: 'business',
      arrayData: [],
      initialFilter: (value) => (
        value.businessCode === 'C' ||
        value.businessCode === 'T' ||
        value.businessCode === 'AE' ||
        value.businessCode === 'AU'
      ),
    }
  },
  {
    label: 'Business Area',
    field: 'businessAreaCode',
    previousField: 'businessCode',
    type: RevenueAdjustmentFieldType.dropdown,
    isDisabled: true,
    sumTotal: false,
    validators: [Validators.required],
    dropdownData: {
      cascadeFields: ['businessLineCode'],
      textField: 'businessAreaText',
      valueField: 'businessAreaCode',
      sourceData: 'businessArea',
      arrayData: [],
      handler: (value, array) => {
        return array.filter((item: any) => item.businessCode === value);
      }
    }
  },
  {
    label: 'Business Line',
    field: 'businessLineCode',
    previousField: 'businessAreaCode',
    type: RevenueAdjustmentFieldType.dropdown,
    isDisabled: true,
    sumTotal: false,
    validators: [Validators.required],
    dropdownData: {
      cascadeFields: [],
      textField: 'businessLineText',
      valueField: 'businessLineCode',
      sourceData: 'businessLine',
      arrayData: [],
      handler: (value, array) => {
        return array.filter((item: any) => item.businessAreaCode === value);
      }
    }
  },
  {
    label: 'LTD GSR $ incurred',
    field: 'incurredValue',
    validators: [Validators.required, Validators.min(0)],
    previousField: null,
    type: RevenueAdjustmentFieldType.currency,
    sumTotal: true,
    isDisabled: false,
  },
  {
    label: 'Adjustment $ Split',
    field: 'adjustmentValue',
    validators: [Validators.required, Validators.min(0)],
    previousField: null,
    type: RevenueAdjustmentFieldType.currency,
    sumTotal: true,
    isDisabled: false,
  },
  {
    label: 'NSR ETC Impact Due to DR/ESU change',
    field: 'impactValue',
    validators: [Validators.required, Validators.min(0)],
    previousField: null,
    type: RevenueAdjustmentFieldType.currency,
    sumTotal: true,
    isDisabled: false,
  },
  {
    label: 'Total',
    field: 'totalValue',
    validators: [Validators.required, Validators.min(0)],
    previousField: null,
    type: RevenueAdjustmentFieldType.currency,
    sumTotal: false,
    isDisabled: true,
  }
];

export interface RevenueAdjustment {
  id: number;
  adjustmentValue: number;
  impactValue: number;
  incurredValue: number;
  totalValue: number;
  businessCode: string;
  businessAreaCode: string;
  businessLineCode: string;
}

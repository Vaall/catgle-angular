export interface FORM_KEYS {
  name: '',
  document: '',
  email: '',
  phone: '',
  address: '',
  birthdate: '',
  medicalTurnItems: [],
  social: '',
  dayPicker: [],
  month: '',
  hours: '',
  medicFile: []
};

export interface Input {
  name: string;
  id: string;
  type: 'text' | 'email' | 'date' | 'number' | 'select' | 'daypicker' | 'filedropper';
  placeholder?: string,
  selectData?: any[],
  defaultValue?: any,
}

export interface InputField {
  inputData: Input,
  label?: string,
  required: boolean,
  formikField: keyof FORM_KEYS
}

export interface ActiveTurnItem {
  id: number,
  medic: string,
  speciality: string,
  study: string,
};

export interface CustomChangeEvent {
  target: {
    name: string,
    value: {
      value: string;
      label: string;
    } | null | string[]
  }
};

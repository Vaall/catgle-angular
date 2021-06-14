import { Theme } from "react-select";
import { ActiveTurnItem, InputField } from "../interfaces/Form.interfaces";
import * as Yup from 'yup';

export const HOURS_SELECT_DATA = [
  { value: '1', label: 'De 08:00 a 12:00 Hs.' },
  { value: '2', label: 'De 12:00 a 16:00 Hs.' },
  { value: '3', label: 'Despues de las 16:00 Hs.' },
];

export const MONTH_SELECT_DATA = [
  { value: '1', label: 'Enero' },
  { value: '2', label: 'Febrero' },
  { value: '3', label: 'Marzo' },
  { value: '4', label: 'Abril' },
  { value: '5', label: 'Mayo' },
  { value: '6', label: 'Junio' },
  { value: '7', label: 'Julio' },
  { value: '8', label: 'Agosto' },
  { value: '9', label: 'Septiembre' },
  { value: '10', label: 'Octubre' },
  { value: '11', label: 'Noviembre' },
  { value: '12', label: 'Diciembre' },
];

export const SOCIAL_SELECT_DATA = [
  { value: "PARTICULAR", label: 'PARTICULAR' },
  { value: "ACA SALUD", label: 'ACA SALUD' },
  { value: "A.E.SAN PEDRO", label: 'A.E.SAN PEDRO' },
  { value: "AMICOS", label: 'AMICOS' },
  { value: "AMUR", label: 'AMUR' },
  { value: "APPI (Colegio de Farmacéuticos)", label: 'APPI (Colegio de Farmacéuticos)' },
  { value: "ASPURC", label: 'ASPURC' },
  { value: "A Y E CORDOBA", label: 'A Y E CORDOBA' },
  { value: "CAJA NOTARIAL", label: 'CAJA NOTARIAL' },
  { value: "CENTROS DERIVANTES", label: 'CENTROS DERIVANTES' },
  { value: "CEOM – CENTRO DERIVANTE", label: 'CEOM – CENTRO DERIVANTE' },
  { value: "CIENCIAS ECONOMICAS", label: 'CIENCIAS ECONOMICAS' },
  { value: "CAJA DE ABOGADOS", label: 'CAJA DE ABOGADOS' },
  { value: "OMINT S.A.", label: 'OMINT S.A.' },
  { value: "DASPU", label: 'DASPU' },
  { value: "DASUTEN", label: 'DASUTEN' },
  { value: "SWISS MEDICAL (DOCTHOS)", label: 'SWISS MEDICAL (DOCTHOS)' },
  { value: "DOSEP SAN LUIS", label: 'DOSEP SAN LUIS' },
  { value: "FEDERADA 25 DE JUNIO", label: 'FEDERADA 25 DE JUNIO' },
  { value: "GALENO S.A.", label: 'GALENO S.A.' },
  { value: "HERCULES", label: 'HERCULES' },
  { value: "HOSPITAL PRIVADO", label: 'HOSPITAL PRIVADO' },
  { value: "IOSE", label: 'IOSE' },
  { value: "JERÁRQUICOS SALUD", label: 'JERÁRQUICOS SALUD' },
  { value: "LUIS PASTEUR", label: 'LUIS PASTEUR' },
  { value: "MEDICUS", label: 'MEDICUS' },
  { value: "MEDIFE", label: 'MEDIFE' },
  { value: "OPDEA", label: 'OPDEA' },
  { value: "OSDE BINARIO", label: 'OSDE BINARIO' },
  { value: "OSDOP", label: 'OSDOP' },
  { value: "OSFA (DIBPFA- Hospital Aeronaútico)", label: 'OSFA (DIBPFA- Hospital Aeronaútico)' },
  { value: "OSPE", label: 'OSPE' },
  { value: "OSAM (Se rehabilita la atención a partir del 01/05/2013)", label: 'OSAM&nbsp;(Se rehabilita la atención a partir del 01/05/2013)' },
  { value: "OSPTA", label: 'OSPTA' },
  { value: "PODER JUDICIAL", label: 'PODER JUDICIAL' },
];

export const TURN_PERSONAL_DATA_INPUTS: InputField[] = [
  {
    inputData: {
      name: 'name',
      id: 'name_1',
      type: 'text'
    },
    formikField: 'name',
    label: 'Nombre y Apellido',
    required: true,
  },
  {
    inputData: {
      name: 'document',
      id: 'document_2',
      type: 'number'
    },
    formikField: 'document',
    label: 'DNI',
    required: true
  },
  {
    inputData: {
      name: 'email',
      id: 'email_3',
      type: 'email'
    },
    formikField: 'email',
    label: 'Email',
    required: true
  },
  {
    inputData: {
      name: 'phone',
      id: 'phone_4',
      type: 'number'
    },
    formikField: 'phone',
    label: 'Télefono',
    required: true
  },
  {
    inputData: {
      name: 'address',
      id: 'address_5',
      type: 'text'
    },
    formikField: 'address',
    label: 'Dirección',
    required: true
  },
  {
    inputData: {
      name: 'birthdate',
      id: 'birthdate_6',
      type: 'date'
    },
    formikField: 'birthdate',
    label: 'Fecha de nacimiento',
    required: true
  },
  {
    inputData: {
      name: 'social',
      id: 'social_7',
      type: 'select',
      placeholder: '',
      selectData: SOCIAL_SELECT_DATA,
      defaultValue: SOCIAL_SELECT_DATA[0]
    },
    formikField: 'social',
    label: 'Obra Social',
    required: false
  }
];

export const WEEK_TURN_INPUTS: InputField[] = [
  {
    inputData: {
      name: 'dayPicker',
      id: 'dayPicker_10',
      type: 'daypicker',
      placeholder: ''
    },
    formikField: 'dayPicker',
    label: 'Día de la semana',
    required: true,
  },
  {
    inputData: {
      name: 'month',
      id: 'month_8',
      type: 'select',
      placeholder: '',
      selectData: MONTH_SELECT_DATA,
    },
    formikField: 'month',
    label: 'Mes',
    required: true,
  },
  {
    inputData: {
      name: 'hours',
      id: 'hours_9',
      type: 'select',
      placeholder: '',
      selectData: HOURS_SELECT_DATA,
    },
    formikField: 'hours',
    label: 'Hora',
    required: true,
  },
];

export const FILE_DROPPER_INPUT: InputField = {
  inputData: {
    name: 'medicFile',
    id: 'medicFile_8',
    type: 'filedropper',
    placeholder: ''
  },
  formikField: 'medicFile',
  label: 'Pedido Médico (adjuntar en caso que corresponda)',
  required: true,
};

export const ACTIVE_TURN_ITEM: ActiveTurnItem = {
  id: 1,
  medic: '',
  speciality: '',
  study: '',
};

export const FORM_INITIAL_VALUES = {
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

export const SELECT_THEME = (theme: Theme) => ({
  ...theme,
  borderRadius: 4,
  colors: {
    ...theme.colors,
    neutral20: '#5a5a5a ',
    primary25: '#009299',
    primary: '#009299',
  },
});

export const FORM_VALIDATIONS = Yup.object().shape({
  name: Yup.string().required('Campo Requerido'),
  document: Yup.number()
    .max(99999999, 'DNI invalido')
    .min(1000000, 'DNI invalido')
    .required('Campo Requerido'),
  email: Yup.string()
    .email('Email no valido')
    .required('Campo Requerido'),
  phone: Yup.string()
    .max(10, 'Telefono invalido')
    .min(10, 'Telefono invalido')
    .required('Campo Requerido'),
  address: Yup.string().required('Campo Requerido'),
  birthdate: Yup.date()
    .min('1900-01-01', 'Fecha invalida')
    .max(new Date(), 'Fecha invalida')
    .required('Campo Requerido'),
  dayPicker: Yup.array().length(1, 'Al menos debe seleccionar un día'),
  month: Yup.string().required('Campo Requerido'),
  hours: Yup.string().required('Campo Requerido')
});
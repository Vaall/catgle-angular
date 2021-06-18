import { InputField } from "../interfaces";

export const MEDICAL_TURN_FIELDS: InputField[] = [
  {
    inputData: {
      name: 'medic',
      id: 'medic',
      type: 'text'
    },
    label: 'Médico',
    required: false,
    formikField: 'medicalTurnItems'
  },
  {
    inputData: {
      name: 'speciality',
      id: 'speciality',
      type: 'text',
    },
    formikField: 'medicalTurnItems',
    label: 'Especialidad',
    required: false
  },
  {
    inputData: {
      name: 'study',
      id: 'study',
      type: 'text'
    },
    formikField: 'medicalTurnItems',
    label: 'Estudio',
    required: false
  }
];

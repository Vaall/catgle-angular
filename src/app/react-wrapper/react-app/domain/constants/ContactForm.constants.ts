import * as Yup from 'yup';

export const CONTACT_FORM_INITIAL_VALUES = {
  nameContact: '',
  emailContact: '',
  numberContact: '',
  messageContact: ''
};

export const CONTACT_FORM_VALIDATIONS = Yup.object().shape({
  nameContact: Yup.string().required('Campo Requerido'),
  emailContact: Yup.string()
    .email('Email no valido')
    .required('Campo Requerido'),
});

export const CONTACT_FORM_FIELDS = [
  {
    inputData: {
      placeholder: 'Nombre',
      type: 'text',
      id: 'nameContact',
      name: 'nameContact',
    },
    required: true,
  },
  {
    inputData: {
      placeholder: 'E-Mail',
      type: 'email',
      id: 'emailContact',
      name: 'emailContact'
    },
    required: true,
  },
  {
    inputData: {
      placeholder: 'Télefono',
      type: 'number',
      id: 'numberContact',
      name: 'numberContact'
    },
    required: false,
  },
  {
    inputData: {
      placeholder: 'Mensaje',
      type: 'textarea',
      id: 'messageContact',
      name: 'messageContact'
    },
    required: false,
  },
];

export const CONTACT_FORM_SUBMIT_ENDPOINT = 'http://localhost:3000/submit-contact-form';

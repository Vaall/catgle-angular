import React, { FC } from 'react';
import { useFormik } from 'formik';
import {
  CONTACT_FORM_FIELDS,
  CONTACT_FORM_INITIAL_VALUES,
  CONTACT_FORM_VALIDATIONS,
} from 'src/app/react-wrapper/react-app/domain';

interface ImcContactFormProps {
  handleFormSubmit: (values: typeof CONTACT_FORM_INITIAL_VALUES) => Promise<any>
}

export const ImcContactForm: FC<ImcContactFormProps> = ({ handleFormSubmit }) => {
  const formik = useFormik({
    initialValues: CONTACT_FORM_INITIAL_VALUES,
    onSubmit: async (values) => {
      await handleFormSubmit(values);
      formik.resetForm();
    },
    validationSchema: CONTACT_FORM_VALIDATIONS
  });

  return (
    <div>
      <h4 className="Imc_ContactInfo_title">Consulta</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.submitForm();
        }}
        className="Imc_ContactForm_fieldContainer"
      >
        {CONTACT_FORM_FIELDS.map((field) => (
          <div key={field.inputData.id} className="Imc_ContactForm_fieldContainer">
            {field.inputData.type === 'textarea'
              ? (
                <textarea
                  {...field.inputData}
                  value={formik.values[field.inputData.name]}
                  onChange={formik.handleChange}
                  className="Imc_ContactForm_fieldArea"
                  placeholder={`${field.inputData.placeholder} ${field.required ? ' *' : ''}`}
                ></textarea>
              ) : (
                <input
                  {...field.inputData}
                  value={formik.values[field.inputData.name]}
                  onChange={formik.handleChange}
                  className="Imc_ContactForm_field"
                  placeholder={`${field.inputData.placeholder} ${field.required ? ' *' : ''}`}
                />
              )}
            {formik.errors[field.inputData.name] && formik.touched[field.inputData.name] && (
              <div className="Imc_ContactForm_error">
                {formik.errors[field.inputData.name]}
              </div>
            )}
          </div>
        ))}
        <div className="Imc_ContactForm_actionContainer">
          <button className="Imc_TurnForm_submit" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

import React from 'react';
import Select from 'react-select';
import { FormikTouched } from 'formik';
import { ChangeEvent } from 'react';
import { ImcDaysPickerField } from '../ImcDaysPickerField/ImcDaysPickerField.component';
import { CustomChangeEvent, InputField, SELECT_THEME } from 'src/app/react-wrapper/react-app/domain';
import { ImcFileDropper } from '../../../Shared/ImcFileDropper/ImcFileDropper.component';
import './ImcEditableField.styles.scss';

interface ImcEditableFieldProps {
  field: InputField,
  className?: string,
  onChange: (e: ChangeEvent | CustomChangeEvent) => void,
  error?: any,
  touched?: boolean | never[] | FormikTouched<any>[]
}

export const ImcEditableField = (data: ImcEditableFieldProps) => {
  const renderField = () => {
    if (data.field.inputData.type === 'select') {
      return <Select
        className="react-select-container"
        classNamePrefix="react-select"
        theme={SELECT_THEME}
        defaultValue={data.field.inputData.defaultValue || null}
        onChange={handleCustomFieldChanges}
        options={data.field.inputData.selectData || []}
        {...data.field.inputData}
      />;
    } else if (data.field.inputData.type === 'daypicker') {
      return (
        <ImcDaysPickerField
          onChange={handleCustomFieldChanges}
        />
      );
    } else if (data.field.inputData.type === 'filedropper') {
      return (
        <ImcFileDropper
          onChange={handleCustomFieldChanges}
        />
      );
    }
    return (
      <input
        onChange={data.onChange}
        className={data.className ? data.className : "Imc_EdtiableField_input"}
        {...data.field.inputData}
      />
    );
  }

  const handleCustomFieldChanges = (values: any) => {
    const changeEvent = { target: { value: values, name: data.field.inputData.name } };
    data.onChange(changeEvent);
  }

  return (
    <div className="Imc_EdtiableField">
      {data.field.label && <label htmlFor={data.field.inputData.id}>
        {data.field.label}
        <span className="Imc_EdtiableField_required">{data.field.required ? ' *' : ''}</span>
      </label>}
      {renderField()}
      {data.error && data.touched && <div className="Imc_EdtiableField_error">{data.error}</div>}
    </div>
  );
};

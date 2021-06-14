import Select from 'react-select';
import { ChangeEvent } from 'react';
import { InputField } from '../../../../domain/interfaces/Form.interfaces';
import { ImcDaysPickerField } from '../ImcDaysPickerField/ImcDaysPickerField.component';
import { ImcFileDropper } from '../ImcFileDropper/ImcFileDropper.component';
import './ImcEditableField.styles.scss';
import { SELECT_THEME } from '../../../../domain/constants/Form.constants';

interface ImcEditableFieldProps {
  field: InputField,
  className?: string,
  onChange: (e: ChangeEvent | {
    target: {
      name: string,
      value: {
        value: string;
        label: string;
      } | null | string[]
    }
  }) => void,
  error?: any,
  touched?: boolean | never[] | undefined
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

export const ImcEditableField = (data: ImcEditableFieldProps) => {
  const renderField = () => {
    if (data.field.inputData.type === 'select') {
      return <Select
        className="react-select-container"
        classNamePrefix="react-select"
        theme={SELECT_THEME}
        defaultValue={data.field.inputData.defaultValue || null}
        {...data.field.inputData}
        onChange={handleCustomFieldChanges}
        options={data.field.inputData.selectData || options}
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

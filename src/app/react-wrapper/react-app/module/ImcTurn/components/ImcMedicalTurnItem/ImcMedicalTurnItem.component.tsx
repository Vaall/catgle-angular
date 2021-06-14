import { FC } from 'react';
import { ActiveTurnItem, InputField } from '../../../../domain/interfaces/Form.interfaces';
import { ImcEditableField } from '../ImcEditableField/ImcEditableField.component';
import './ImcMedicalTurnItem.styles.scss';

const MEDICAL_TURN_FIELDS: InputField[] = [
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

interface Keys {
  medic: '',
  study: '',
  speciality: '',
}

interface ImcMedicalTurnItemProps {
  item: ActiveTurnItem;
  itemsLength: number;
  index: number;
  onItemAdded: () => void;
  onItemDeleted: (id: any) => void;
};

export const ImcMedicalTurnItem: FC<ImcMedicalTurnItemProps> = (props) => {
  function getIndexedValue(value: string): keyof Keys {
    if (value === 'medic' || value === 'study' || value === 'speciality') {
      return value;
    } else return 'medic';
  }

  const handleValueChange = (event: any) => {
    props.item[getIndexedValue(event.target.id)] = event.target.value;
  };

  return (
    <div className="Imc_MedicalTurnItem col-4 --fadeIn">
      {MEDICAL_TURN_FIELDS.map((field) => (
        <ImcEditableField
          key={field.inputData.id}
          onChange={handleValueChange}
          className="Imc_MedicalTurnItem_input"
          field={field}
        />
      ))}
      <div className="Imc_MedicalTurnItem_actions">
        {!props.index && (
          <button
            className="Imc_MedicalTurnItem_actions_button"
            type="button"
            onClick={() => props.onItemAdded()}
          >
            +
          </button>
        )}
        {props.itemsLength > 1 && (
          <button
            className="Imc_MedicalTurnItem_actions_button close"
            type="button"
            onClick={() => props.onItemDeleted(props.item.id)}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

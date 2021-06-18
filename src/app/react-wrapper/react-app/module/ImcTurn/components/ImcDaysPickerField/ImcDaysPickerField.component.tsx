import React from 'react';
import { FC, useState } from 'react';
import { Shared } from '../../../Shared';
import './ImcDaysPickerField.styles.scss';

const WEEK_DAYS = [
  { value: 'monday', text: 'L' },
  { value: 'tuesday', text: 'MA' },
  { value: 'wendsday', text: 'M' },
  { value: 'thursday', text: 'J' },
  { value: 'friday', text: 'V' },
  { value: 'saturday', text: 'S' },
];

interface ImcDaysPickerFieldProps {
  onChange: (e: string[]) => void,
};

export const ImcDaysPickerField: FC<ImcDaysPickerFieldProps> = ({ onChange }) => {
  const [daysPicked, setDaysPicked] = useState<string[]>([]);

  const handleDaysChanged = (event: any) => {
    if (event.target.checked) {
      setDaysPicked([...daysPicked, event.target.value]);
      onChange([...daysPicked, event.target.value]);
    } else {
      setDaysPicked([...daysPicked.filter((item) => item !== event.target.value)]);
      onChange([...daysPicked.filter((item) => item !== event.target.value)]);
    }
  };

  return (
    <div className="Imc_DaysPickerField">
      <div>
        {WEEK_DAYS.map((day) => (
          <Shared.ImcCustomCheckbox
            onChange={handleDaysChanged}
            key={day.value}
            inputData={day}
          />
        ))}
      </div>
    </div>
  );
};

import { ChangeEvent, FC } from 'react';
import './ImcCustomCheckbox.styles.scss';

interface ImcCustomCheckboxProps {
  onChange: (e: ChangeEvent) => void,
  inputData: { value: string, text: string };
}

export const ImcCustomCheckbox: FC<ImcCustomCheckboxProps> = ({ inputData, onChange }) => {
  return (
    <article>
      <input onChange={onChange} type="checkbox" value={inputData.value} />
      <div>
        <span>
          {inputData.text}
        </span>
      </div>
    </article>
  );
};
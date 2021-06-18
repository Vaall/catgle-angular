import React, { useCallback, useState } from 'react';

export interface IFeelingFormProps {
  name: string;
  onSubmit: (feelingUpdate: string) => void;
}

const FeelingForm: React.FC<IFeelingFormProps> = ({ name, onSubmit }) => {
  const [currentFeeling, setCurrentFeeling] = useState('');

  const onFeelingChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentFeeling(event.currentTarget.value);
    },
    []
  );

  const onSubmitEvent = useCallback(() => {
    onSubmit(`${name} is feeling: ${currentFeeling}`);
  }, [name, currentFeeling]);

  return (
    <form onSubmit={onSubmitEvent}>
      <label htmlFor="feeling-input">How are you feeling?</label>
      <input
        id="feeling-input"
        onChange={onFeelingChange}
        value={currentFeeling}
      />
      <button type="submit">Send feeling</button>
    </form>
  );
};

export default FeelingForm;

import '../../all.scss';
import React, { useState } from 'react';
import { ImcTurnForm } from "./components/ImcTurn/ImcTurn.component";
import { convertFile, ENDPOINT_TO_FORM_SUBMIT } from '../../domain';
import { Shared } from '../Shared';

export const ImcTurnModule = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendForm = async (values: any) => {
    await fetch(ENDPOINT_TO_FORM_SUBMIT, {
      method: 'POST',
      body: JSON.stringify({ ...values }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setFormSubmitted(true);
    setIsLoading(false);
  }

  const handleSubmit = async (values: any) => {
    setIsLoading(true);
    if (values.medicFile.length) {
      await values.medicFile.map(async (file: File, index: number, arr: any[]) => {
        const convertedFile = await convertFile(file)
        values.medicFile[index] = { data: convertedFile };

        if (index === arr.length - 1) sendForm(values);
      });
    } else {
      sendForm(values);
    }

  };

  return (
    <div className="Imc_TurnForm --fadeIn">
      {isLoading
        ? (
          <div className="Imc_loading">
            <Shared.ImcLoading />
          </div>
        ) : (
          formSubmitted
            ? (
              <div className="Imc_loading Imc_submitted">
                Hemos recibido su solicitud. En transcurso de las próximas 24 Hs. hábiles le responderemos.
              </div>
            ) : <ImcTurnForm onFormSubmit={handleSubmit} />
        )}
    </div>
  );
};

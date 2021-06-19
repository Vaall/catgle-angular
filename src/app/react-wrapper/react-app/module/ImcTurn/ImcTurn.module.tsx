import '../../all.scss';
import React, { useState } from 'react';
import { ImcTurnForm } from "./components/ImcTurn/ImcTurn.component";
import { convertFile, ENDPOINT_TO_FORM_SUBMIT } from '../../domain';
import { Shared } from '../Shared';
import { toast } from 'react-toastify';

export const ImcTurnModule = () => {
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendForm = async (values: any) => {
    try {
      await fetch(ENDPOINT_TO_FORM_SUBMIT, {
        method: 'POST',
        body: JSON.stringify({ ...values }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSubmitMessage(
        `Hemos recibido su solicitud.
        En transcurso de las próximas 24 Hs.
        hábiles le responderemos.`
      );
      setFormSubmitted(true);
      setIsLoading(false);
    } catch (err) {
      toast.error(
        `Ocurrio un error por favor recargue la página
        e intente nuevamente.`
      );
      setIsLoading(false);
      setTimeout(() => {
        setFormSubmitted(false);
      }, 1500);
    }
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
                {submitMessage}
              </div>
            ) : <ImcTurnForm onFormSubmit={handleSubmit} />
        )}
    </div>
  );
};

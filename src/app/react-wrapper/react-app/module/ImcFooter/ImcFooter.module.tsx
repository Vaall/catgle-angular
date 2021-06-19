import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {
  CONTACT_FORM_INITIAL_VALUES,
  CONTACT_FORM_SUBMIT_ENDPOINT,
} from '../../domain';
import { ImcLoading } from '../Shared/ImcLoading/ImcLoading';
import { ImcContactForm } from './components/ImcContactForm/ImcContactForm.component';
import { ImcContactInfo } from './components/ImcContactInfo/ImcContactInfo.component';
import { ImcFooter } from './components/ImcFooter/ImcFooter.component';

export const ImcFooterModule = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const submitContactForm = async (values: typeof CONTACT_FORM_INITIAL_VALUES) => {
    setLoading(true);
    try {
      const response = await fetch(
        CONTACT_FORM_SUBMIT_ENDPOINT,
        { method: 'POST', body: JSON.stringify({ ...values }) }
      );
      await response.json();
      setLoading(false);
      toast.info('¡El mensaje fue enviado!');
    } catch (err) {
      setLoading(false);
      toast.error('Ocurrio un problema, por favor intente nuevamente.');
    }
  }

  return (
    <>
      <div className="container">
        {loading && (
          <div className="Imc_loadingContainer">
            <ImcLoading />
          </div>
        )}
        <div className="contact">
          <ImcContactInfo />
        </div>
        <div className="contact_form">
          <ImcContactForm handleFormSubmit={submitContactForm} />
        </div>
        <ToastContainer position="bottom-right" />
      </div>
      <ImcFooter />
    </>
  );
}

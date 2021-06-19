import React from 'react';
import FooterImage from '../../../../../../../assets/images/bottom-logo-imc-regular.png';

export const ImcFooter = () => {
  return (
    <footer className="Imc_Footer">
      <div className="Imc_Footer_content">
        <img src={FooterImage} />
        <div className="Imc_Footer_legal">
          <p>IMC - Instituto Modelo de Cardiología Privado S.R.L.</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

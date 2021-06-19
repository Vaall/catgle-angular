import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CONTACT_INFO_FIELDS, MEDIA_ICONS } from 'src/app/react-wrapper/react-app/domain';

export const ImcContactInfo = () => {
  return (
    <div className="Imc_ContactInfo">
      <h4 className="Imc_ContactInfo_title">Contáctenos</h4>
      {CONTACT_INFO_FIELDS.map((field, index) => (
        <div className="Imc_ContactInfo_field" key={index}>
          <p className="Imc_ContactInfo_subTitle">{field.title}</p>
          <p>{field.value}</p>
        </div>
      ))}
      <div className="Imc_ContactInfo_linkContainer">
        {MEDIA_ICONS.map((media, index) => (
          <div key={index} className={`Imc_ContactInfo_link ${media.hoverClassName}`}>
            <a href={media.link}>
              <FontAwesomeIcon icon={media.icon} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

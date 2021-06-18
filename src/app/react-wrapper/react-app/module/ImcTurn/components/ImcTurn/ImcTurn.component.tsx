/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useFormik } from 'formik';
import { FC, useEffect, useState } from 'react';
import { ImcMedicalTurnItem } from '../ImcMedicalTurnItem/ImcMedicalTurnItem.component';
import './ImcTurnForm.styles.scss';
import { ImcEditableField } from '../ImcTurnFormEditableField/ImcEditableField.component';
import {
  ActiveTurnItem,
  ImcMedicalTurnUtils,
  ACTIVE_TURN_ITEM,
  FILE_DROPPER_INPUT,
  FORM_INITIAL_VALUES,
  FORM_VALIDATIONS,
  TURN_PERSONAL_DATA_INPUTS,
  WEEK_TURN_INPUTS,
} from 'src/app/react-wrapper/react-app/domain';

interface ImcTurnFormProps {
  onFormSubmit: (e: any) => Promise<void>,
}

export const ImcTurnForm: FC<ImcTurnFormProps> = ({ onFormSubmit }) => {
  const formik = useFormik({
    initialValues: FORM_INITIAL_VALUES,
    onSubmit: (e) => onFormSubmit(e).then(() => formik.resetForm({})),
    validationSchema: FORM_VALIDATIONS,
  });
  const [activeTurnItems, setActiveTurnItems] = useState<ActiveTurnItem[]>([]);

  useEffect(() => {
    ImcMedicalTurnUtils.handleItemAddition(
      activeTurnItems,
      ACTIVE_TURN_ITEM,
      setActiveTurnItems,
      formik
    );
  }, []);

  return (
    <div className="Imc_TurnForm_wrapper">
      <div className="Imc_TurnForm_header">
        <h3 className="Imc_TurnForm_header_title">TURNOS POR EMAIL</h3>
        <div className="Imc_TurnForm_header_caption" />
      </div>
      <form onSubmit={(e) => { e.preventDefault(); formik.submitForm() }} className="Imc_TurnForm_body">
        <h3 className="Imc_TurnForm_body_subtitle">Datos Personales</h3>
        <div className="Imc_TurnForm_body_fieldWrapper col-2">
          {TURN_PERSONAL_DATA_INPUTS.map((field) => (
            <ImcEditableField
              onChange={formik.handleChange}
              key={field.inputData.id}
              field={field}
              touched={formik.touched[field.formikField]}
              error={formik.errors[field.formikField]}
            />
          ))}
        </div>
        <h3 className="Imc_TurnForm_body_subtitle">Datos del Turno</h3>
        <div className="Imc_TurnForm_body_fieldWrapper">
          {activeTurnItems.map((item, index) => (
            <ImcMedicalTurnItem
              item={item}
              key={item.id}
              index={index}
              onItemAdded={() => ImcMedicalTurnUtils.handleItemAddition(
                activeTurnItems,
                ACTIVE_TURN_ITEM,
                setActiveTurnItems,
                formik
              )}
              onItemDeleted={(id) => ImcMedicalTurnUtils.handleItemDeletition(
                id,
                setActiveTurnItems,
                activeTurnItems,
                formik
              )}
              itemsLength={activeTurnItems.length}
            />
          ))}
          <span className="Imc_TurnForm_legend">
            Puede agregar más de un turno presionando el botón + que se muestra a la derecha.
            </span>
        </div>
        <div className="Imc_TurnForm_body_fieldWrapper col-3">
          {WEEK_TURN_INPUTS.map((field) => (
            <ImcEditableField
              touched={formik.touched[field.formikField]}
              error={formik.errors[field.formikField]}
              onChange={formik.handleChange}
              key={field.inputData.id}
              field={field}
            />
          ))}
        </div>
        <div className="Imc_TurnForm_body_fieldWrapper">
          <ImcEditableField
            touched={formik.touched[FILE_DROPPER_INPUT.formikField]}
            error={formik.errors[FILE_DROPPER_INPUT.formikField]}
            onChange={formik.handleChange}
            field={FILE_DROPPER_INPUT}
          />
        </div>
        <div className="Imc_TurnForm_body_fieldWrapper">
          <button className="Imc_TurnForm_submit" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

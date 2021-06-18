import { Dispatch } from "react";
import { ActiveTurnItem } from "../interfaces";
import { getNextMaxValue } from "./utils";

export class ImcMedicalTurnUtils {
  static updateTurnItems(values: any[], formik) {
    const event = {
      target: {
        value: values,
        id: 'medicalTurnItems',
      }
    }
    formik.handleChange(event);
  }

  static handleItemAddition(
    activeTurnItems: ActiveTurnItem[],
    data: ActiveTurnItem,
    stateAction: Dispatch<React.SetStateAction<ActiveTurnItem[]>>,
    formik: any
  ) {
    const idsArray: number[] = [];
    activeTurnItems.map((item) => idsArray.push(item.id));
    const newItem = { ...data, id: getNextMaxValue(idsArray) };

    stateAction([...activeTurnItems, newItem]);
    ImcMedicalTurnUtils.updateTurnItems([...activeTurnItems, newItem], formik);
  };

  static handleItemDeletition(
    id: number,
    stateAction: Dispatch<React.SetStateAction<ActiveTurnItem[]>>,
    data: ActiveTurnItem[],
    formik: any
  ) {
    stateAction([...data.filter((item) => item.id !== id)]);
    ImcMedicalTurnUtils.updateTurnItems([...data.filter((item) => item.id !== id)], formik);
  };
}

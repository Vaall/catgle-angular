import { ImcTurnForm } from "./components/ImcTurn/ImcTurn.component";

export const ImcTurnModule = () => {
  return (
    <ImcTurnForm onFormSubmit={(e) => { console.log(e) }} />
  );
};

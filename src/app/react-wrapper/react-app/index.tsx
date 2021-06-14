import React from 'react';
import './index.css';
import { ImcTurnModule } from './module/ImcTurn/ImcTurn.module';

export const ReactWrapper = () => {
  return (
    <React.StrictMode>
      <ImcTurnModule />
    </React.StrictMode>
  );
}

import React, { FC, PropsWithChildren } from 'react';
import './index.css';
import './all.scss';
import { ImcTurnModule } from './module/ImcTurn/ImcTurn.module';
import { ImcFooterModule } from './module/ImcFooter/ImcFooter.module';
import { ImcBannerModule } from './module/ImcBanner/ImcBanner.module';
import { Router } from '@angular/router';


interface ImcBannerModuleProps {
  routerData?: string;
}

export const ReactBanner: FC<ImcBannerModuleProps> = ({ routerData }) => {
  return (
    <React.StrictMode>
      <ImcBannerModule routerData={routerData} />
    </React.StrictMode>
  )
}

export const ReactWrapper = () => {
  return (
    <React.StrictMode>
      <ImcTurnModule />
    </React.StrictMode>
  );
}

export const ReactFooter = () => {
  return (
    <React.StrictMode>
      <ImcFooterModule />
    </React.StrictMode>
  );
}

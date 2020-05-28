import React, { FunctionComponent } from 'react';

import { HomeButton } from '../home-button/home-button';
import './styles.scss';

interface IFooterProps { }

export const Footer: FunctionComponent<IFooterProps> = () => {
  return (
    <div className={'footer'}>
      <HomeButton />
    </div>
  );
};

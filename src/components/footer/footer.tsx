import React, { FunctionComponent } from 'react';

import { HomeButton } from '../';

import './footer.scss';

interface IFooterProps { }

export const Footer: FunctionComponent<IFooterProps> = () => {
  return (
    <div className={'footer'}>
      <HomeButton />
    </div>
  );
};

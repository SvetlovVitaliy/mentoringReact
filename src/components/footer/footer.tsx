import React, { FunctionComponent } from 'react';

import { HomeButton } from '../';

import './footer.scss';

export const Footer: FunctionComponent<{}> = () => {
  return (
    <div className={'footer'}>
      <HomeButton />
    </div>
  );
};

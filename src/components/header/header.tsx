import React, { FunctionComponent } from 'react';

import { HeaderWrapper } from './header-wrapper';
import { HomeButton, Search } from '../';

import './header.scss';

export const Header: FunctionComponent<{}> = () => {
  return (
    <HeaderWrapper>
      <HomeButton />
      <Search />
    </HeaderWrapper>
  );
};

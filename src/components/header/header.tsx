import React, { FunctionComponent } from 'react';

import { HeaderWrapper } from './sub-components';
import { HomeButton, Search } from '../';

import './header.scss';

interface IHeaderProps { }

export const Header: FunctionComponent<IHeaderProps> = () => {
  return (
    <HeaderWrapper>
      <HomeButton />
      <Search />
    </HeaderWrapper>
  );
};

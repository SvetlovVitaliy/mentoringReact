import React, { FunctionComponent } from 'react';

import { HeaderWrapper } from './header-wrapper';
import { HomeButton } from '../home-button/home-button';
import './style.scss';
import { Search } from '../search';

interface IHeaderProps { }

export const Header: FunctionComponent<IHeaderProps> = () => {
  return (
    <HeaderWrapper>
      <HomeButton />
      <Search />
    </HeaderWrapper>
  );
};

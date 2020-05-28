import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const NETFLIX = 'netflix';
const ROULETTE = 'roulette';

interface IHomeButtonProps { }

export const HomeButton: FunctionComponent<IHomeButtonProps> = () => {
  return (
    <Link className={'home-button'} to={'/'}>
      <b>{NETFLIX}</b>
      {ROULETTE}
    </Link>
  );
};

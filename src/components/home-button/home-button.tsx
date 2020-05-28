import React, { FunctionComponent } from 'react';

import './styles.scss';
import { Link } from 'react-router-dom';

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

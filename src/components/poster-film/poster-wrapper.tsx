import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface IPosterWrapperProps { }

export const PosterWrapper: FunctionComponent<IPosterWrapperProps> = ({
  children,
}) => {
  return (
    <Link className={'poster_wrapper'}  to={'/details'}>
      {children}
    </Link>
  );
};

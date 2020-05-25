import React, { FunctionComponent } from 'react';

interface IPosterWrapperProps { }

export const PosterWrapper: FunctionComponent<IPosterWrapperProps> = ({
  children,
}) => {
  return (
    <div className={'poster_wrapper'}>
      {children}
    </div>
  );
};

import React, { FunctionComponent } from 'react';

interface IHeaderWrapperProps { }

export const HeaderWrapper: FunctionComponent<IHeaderWrapperProps> = ({
  children,
}) => {
  return (
    <div className={'header_wrapper'}>
      <div className={'header_wrapper__background'} />
      <div className={'header_wrapper__content'}>
        {children}
      </div>
    </div>
  );
};

import React, { FunctionComponent } from 'react';

interface IPosterImageProps {
  url: string;
  classNames?: string;
}

export const Image: FunctionComponent<IPosterImageProps> = ({
  url,
  classNames = '',
}) => {
  return (
    <img className={classNames} src={url} />
  );
};

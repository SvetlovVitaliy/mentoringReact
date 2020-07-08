import React, { FunctionComponent } from 'react';

interface IPosterImageProps {
  url: string;
}

export const PosterImage: FunctionComponent<IPosterImageProps> = ({
  url,
}) => {
  return (
    <img className={'poster_image'} src={url} />
  );
};

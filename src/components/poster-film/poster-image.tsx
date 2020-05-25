import * as React from 'react';

interface IPosterImageProps {
  url: string;
}

export const PosterImage: React.FunctionComponent<IPosterImageProps> = ({
  url,
}) => {
  return (
    <img className={'poster_image'} src={url} />
  );
};

import React, { FunctionComponent } from 'react';

import { IMovie } from '../../services/api/utils';
import { Image } from '../image-components';
import { YearTime } from './year-time';
import { TitleRating } from './title-rating';

interface IContentWrapperProps {
  movie: IMovie;
}

export const ContentWrapper: FunctionComponent<IContentWrapperProps> = ({
  movie: {
    poster_path,
    runtime,
    release_date,
    title,
    overview,
    vote_average,
    tagline
  },
}) => {
  const currentDate = new Date(release_date);
  const formatRuntime = `${runtime} min`;

  return (
    <div className={'description-header_content'}>
      <Image classNames={'description-header_image'} url={poster_path} />
      <div className={'description-header_description'}>
        <TitleRating title={title} vote_average={vote_average} />
        <div className={'description-header_description__nomination'}>{tagline}</div>
        <YearTime formatRuntime={formatRuntime} date={currentDate.getFullYear()} />
        <div className={'description-header_description__description'}>{overview}</div>
      </div>
    </div>
  );
};

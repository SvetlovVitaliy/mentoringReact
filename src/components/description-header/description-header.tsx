import React, { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { HomeButton } from '../';

import './description-header.scss';
import { getQueryParams } from '../../services/setting/selector';
import { fetchMoviesList, fetchMovieBy } from '../../services/api/action';
import { getMovieDetails } from '../../services/api/selector';

const SUB_TITLE = 'Films by Drama genre';

export interface IDescriptionHeaderProps {
  dispatch: Function;
}

export const DescriptionHeader: FunctionComponent<IDescriptionHeaderProps> = ({
  dispatch,
}) => {
  const queryString = useSelector(getQueryParams);
  const { poster_path, runtime, release_date, title, overview, vote_average, tagline } = useSelector(getMovieDetails);
  const currentDate = new Date(release_date);
  const formatRuntime = `${runtime} min`;

  useEffect(() => {
    dispatch(fetchMoviesList, queryString[1]);
    dispatch(fetchMovieBy, '401478');
  }, [dispatch, queryString]);

  return (
    <>
      <div className={'description-header'}>
        <div className={'description-header_link'}>
          <HomeButton />
        </div>
        <div className={'description-header_content'}>
          <img className={'description-header_image'} src={poster_path} />
          <div className={'description-header_description'}>
            <div className={'description-header_description__title-rating'}>
              <div className={'description-header_description__title'}>{title}</div>
              <div className={'description-header_description__rating'}>{vote_average}</div>
            </div>
            <div className={'description-header_description__nomination'}>{tagline}</div>
            <div className={'description-header_description__year-time'}>
              <div className={'description-header_description__year'}>{currentDate.getFullYear()}</div>
              <div className={'description-header_description__time'}>{formatRuntime}</div>
            </div>
            <div className={'description-header_description__description'}>{overview}</div>
          </div>
        </div>
      </div>
      <div className={'sub-header'}>
        <b>
          {SUB_TITLE}
        </b>
      </div>
    </>
  );
};

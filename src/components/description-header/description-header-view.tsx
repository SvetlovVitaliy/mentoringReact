import React, { FunctionComponent, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { get } from 'lodash';

import { HomeButton } from '../home-button';
import { fetchMoviesList, fetchMovieBy } from '../../services/api/action';
import { IMovie } from 'src/services/api/utils';

import './description-header.scss';

const SUB_TITLE = 'Films by Drama genre';

export interface IDescriptionHeaderProps extends RouteComponentProps {
  dispatch: Function;
  queryString: string;
  movie: IMovie;
}

export const DescriptionHeaderView: FunctionComponent<IDescriptionHeaderProps> = ({
  dispatch,
  queryString,
  movie: {
    poster_path,
    runtime,
    release_date,
    title,
    overview,
    vote_average,
    tagline
  },
  match,
}) => {
  const currentDate = new Date(release_date);
  const formatRuntime = `${runtime} min`;
  const currentId = get(match, 'params.id', '');

  useEffect(() => {
    dispatch(fetchMoviesList, queryString[1]);
    dispatch(fetchMovieBy, currentId);
  }, [dispatch, queryString, currentId]);

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

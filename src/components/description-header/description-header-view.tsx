import React, { FunctionComponent, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { get } from 'lodash';

import { HomeButton } from '../home-button';
import { fetchMoviesList, fetchMovieBy } from '../../services/api/action';
import { IMovie } from '../../services/api/utils';
import { SUB_TITLE } from './utils';
import { ContentWrapper } from './content-wrapper';

import './description-header.scss';

export interface IDescriptionHeaderProps extends RouteComponentProps {
  dispatch: Function;
  queryString: string;
  movie: IMovie;
}

export const DescriptionHeaderView: FunctionComponent<IDescriptionHeaderProps> = ({
  dispatch,
  queryString,
  movie,
  match,
}) => {
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
        <ContentWrapper movie={movie} />
      </div>
      <div className={'sub-header'}>
        <b>{SUB_TITLE}</b>
      </div>
    </>
  );
};

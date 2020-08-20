import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IMovieListProps } from './movie-list-view';
import { getMovieList } from '../../services/api/selector';
import { getQueryParams } from '../../services/setting/selector';

function mapDispatchToProps(dispatch: Dispatch, ownProps: any): IMovieListProps {
  return {
    ...ownProps,
    fetchMovies: (action: any, params: string) => {
      dispatch(action(params));
    }
  }
}

function mapStateToProps(state: any, ownProps: any) {
  return {
    ...ownProps,
    movies: getMovieList(state),
    queryString: getQueryParams(state),
  };
}

export const container = connect(mapStateToProps, mapDispatchToProps);
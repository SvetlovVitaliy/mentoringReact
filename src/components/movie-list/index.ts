import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { MovieList as List, IMovieListProps } from './movie-list';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any): IMovieListProps => {
  return {
    ...ownProps,
    fetchMovies: (action: any, params: string) => {
      dispatch(action(params));
    }
  }
}

export const MovieList = connect(null, mapDispatchToProps)(List);
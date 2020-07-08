import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { MovieList, IMovieListProps } from './movie-list';
import { getMovieList } from '../../services/api/selector';

function mapDispatchToProps(dispatch: Dispatch, ownProps: any): IMovieListProps {
  return {
    ...ownProps,
    fetchMovies: (action: any, params: string) => {
      dispatch(action(params));
    }
  }
}

function mapStateToProps(state: any) {
  return {
    movies: getMovieList(state),
  };
}

export const ConnectMovieList = connect(mapStateToProps, mapDispatchToProps)(MovieList);
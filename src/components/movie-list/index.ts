import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { MovieList as List, IMovieListProps } from './movie-list';
import { getMovieList } from '../../services/api/selector';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any): IMovieListProps => {
  return {
    ...ownProps,
    fetchMovies: (action: any, params: string) => {
      dispatch(action(params));
    }
  }
}

const mapStateToProps = (state: any) => ({
  movies: getMovieList(state),
})

export const MovieList = connect(mapStateToProps, mapDispatchToProps)(List);
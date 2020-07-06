import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { DescriptionHeader, IDescriptionHeaderProps } from './description-header';
import { getQueryParams } from '../../services/setting/selector';
import { getMovieDetails } from '../../services/api/selector';

function mapDispatchToProps(dispatch: Dispatch, ownProps: any): IDescriptionHeaderProps {
  return {
    ...ownProps,
    dispatch: (action: any, params: string) => {
      dispatch(action(params));
    }
  }
}

function mapStateToProps(state: any, ownProps: any): IDescriptionHeaderProps {
  return {
    ...ownProps,
    queryString: getQueryParams(state),
    movie: getMovieDetails(state),
  };
}

export const ConnectDescriptionHeader = connect(mapStateToProps, mapDispatchToProps)(DescriptionHeader);

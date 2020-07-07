import { connect } from 'react-redux';

import { PosterWrapper } from './poster-wrapper';
import { getQueryParams } from '../../../../services/setting/selector';

function mapStateToProps(state: any, ownProps: any) {
  return {
    ...ownProps,
    queryString: getQueryParams(state),
  };
}

export const ConnectPosterWrapper = connect(mapStateToProps, null)(PosterWrapper);
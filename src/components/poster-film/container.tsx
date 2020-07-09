import { connect } from 'react-redux';

import { getQueryParams } from '../../services/setting/selector';

function mapStateToProps(state: any, ownProps: any) {
  return {
    ...ownProps,
    queryString: getQueryParams(state),
  };
}

export const container = connect(mapStateToProps, null);
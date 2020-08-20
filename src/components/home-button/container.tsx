import { connect } from 'react-redux';

import { getQueryParams, getSearchString } from '../../services/setting/selector';

function mapStateToProps(state: any, ownProps: any) {
  return {
    ...ownProps,
    queryString: getQueryParams(state),
    value: getSearchString(state),
  };
}

export const container = connect(mapStateToProps, null);
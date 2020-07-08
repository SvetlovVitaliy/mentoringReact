import { connect } from 'react-redux';

import { HomeButton } from './home-button';
import { getQueryParams, getSearchString } from '../../services/setting/selector';

function mapStateToProps(state: any, ownProps: any) {
  return {
    ...ownProps,
    queryString: getQueryParams(state),
    value: getSearchString(state),
  };
}

export const ConnectHomeButton = connect(mapStateToProps, null)(HomeButton);
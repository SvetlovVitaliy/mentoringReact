import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ISearchProps } from './search-view';
import {
  getSortOrder,
  getSearchString,
  getQueryParams,
  getSearchBy,
} from '../../services/setting/selector';
import { setSortOrder } from '../../services/setting/action';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any): Partial<ISearchProps> => {
  return {
    ...ownProps,
    dispatch: (action: any, params: string) => {
      dispatch(action(params));
    },
    changeSorting: (params: any = '') => {
      dispatch(setSortOrder(params));
    },
  }
}

const mapStateToProps = (state: any, ownProps: any): ISearchProps => {
  return {
    ...ownProps,
    sortOrder: getSortOrder(state),
    value: getSearchString(state),
    queryString: getQueryParams(state),
    searchBy: getSearchBy(state),
  };
}

export const container = connect(mapStateToProps, mapDispatchToProps);
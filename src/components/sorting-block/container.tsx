import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { setSortBy } from '../../services/setting/action';
import { ISortingBlockProps } from './sorting-block-view';
import { getSortOrder, getSortBy } from '../../services/setting/selector';
import { setSortOrder } from '../../services/setting/action';

// TODO: как описывать ownProps в TS?
function mapDispatchToProps(dispatch: Dispatch, ownProps: any): Partial<ISortingBlockProps> {
  return {
    ...ownProps,
    onclickRadioButton: (params: any = '') => {
      dispatch(setSortBy(params));
    },
    changeSorting: (params: any = '') => {
      dispatch(setSortOrder(params));
    },
  };
}

function mapStateToProps(state: any, ownProps: any) {
  return {
    ...ownProps,
    sortOrder: getSortOrder(state),
    sortBy: getSortBy(state),
  }
};

export const container = connect(mapStateToProps, mapDispatchToProps);

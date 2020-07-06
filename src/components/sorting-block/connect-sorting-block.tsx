import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { setSortBy } from '../../services/setting/action';
import { SortingBlock, ISortingBlockProps } from './sorting-block';
import { getSortOrder, getSortBy } from '../../services/setting/selector';

// TODO: как описывать ownProps в TS?
function mapDispatchToProps(dispatch: Dispatch, ownProps: any): ISortingBlockProps {
  return {
    ...ownProps,
    onclickRadioButton: (params: any = '') => {
      dispatch(setSortBy(params));
    },
  };
}

const mapStateToProps = (state: any, ownProps: any) => ({
  ...ownProps,
  sortOrder: getSortOrder(state),
  sortBy: getSortBy(state),
});

export const ConnectSortingBlock = connect(mapStateToProps, mapDispatchToProps)(SortingBlock);

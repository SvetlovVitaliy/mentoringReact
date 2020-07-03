import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { setSortBy } from '../../services/setting/action';
import { SortingBlock as Sorting, ISortingBlockProps } from './sorting-block';

const mapDispatchToProps = (dispatch: Dispatch): ISortingBlockProps => {
  return {
    onclickRadioButton: (params: any = '') => {
      dispatch(setSortBy(params));
    },
  }
}

export const SortingBlock = connect(null, mapDispatchToProps)(Sorting);

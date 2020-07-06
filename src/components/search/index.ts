import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Search as SearchComponent, ISearchProps } from './search';
import { getSortOrder } from '../../services/setting/selector';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any): ISearchProps => {
  return {
    ...ownProps,
    dispatch: (action: any, params: string) => {
      dispatch(action(params));
    }
  }
}

const mapStateToProps = (state: any) => ({
  sortOrder: getSortOrder(state),
})

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
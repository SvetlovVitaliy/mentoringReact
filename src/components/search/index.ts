import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Search as SearchComponent, ISearchProps } from './search';

const mapDispatchToProps = (dispatch: Dispatch): ISearchProps => {
  return {
    dispatch: (action: any, params: string) => {
      dispatch(action(params));
    }
  }
}

export const Search = connect(null, mapDispatchToProps)(SearchComponent);
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { setSortOrder } from '../../services/setting/action';
import { IButtonRadioProps } from './button-radio-view';
import { getSortOrder } from '../../services/setting/selector';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IButtonRadioProps): IButtonRadioProps => {
  return {
    ...ownProps,
    changeSorting: (params: any = '') => {
      dispatch(setSortOrder(params));
    },
  }
}

const mapStateToProps = (state: any) => ({
  sortOrder: getSortOrder(state),
})

export const container = connect(mapStateToProps, mapDispatchToProps);
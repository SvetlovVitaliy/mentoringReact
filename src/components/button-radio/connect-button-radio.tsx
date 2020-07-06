import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { setSortOrder } from '../../services/setting/action';
import { ButtonRadio, IButtonRadioProps } from './button-radio';
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

export const ConnectButtonRadio = connect(mapStateToProps, mapDispatchToProps)(ButtonRadio);
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { setSortOrder } from '../../services/setting/action';
import { ButtonRadio as Button, IButtonRadioProps, IButtonRadioDispatchProps } from './button-radio';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IButtonRadioProps): IButtonRadioDispatchProps => {
  return {
    ...ownProps,
    changeSorting: (params: any = '') => {
      dispatch(setSortOrder(params));
    },
  }
}

export const ButtonRadio = connect(null, mapDispatchToProps)(Button);
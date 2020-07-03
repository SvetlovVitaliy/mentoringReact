import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { setSortOrder } from '../../services/setting/action';
import { ButtonRadio as Button, IButtonRadioProps } from './button-radio';
import { getMovieDetails } from '../../services/api/selector';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IButtonRadioProps): IButtonRadioProps => {
  return {
    ...ownProps,
    changeSorting: (params: any = '') => {
      dispatch(setSortOrder(params));
    },
  }
}

export const ButtonRadio = connect(null, mapDispatchToProps)(Button);
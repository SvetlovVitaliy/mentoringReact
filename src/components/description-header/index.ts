import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { DescriptionHeader as Description, IDescriptionHeaderProps } from './description-header';

const mapDispatchToProps = (dispatch: Dispatch): IDescriptionHeaderProps => {
  return {
    dispatch: (action: any, params: string) => {
      dispatch(action(params));
    }
  }
}

export const DescriptionHeader = connect(null, mapDispatchToProps)(Description);

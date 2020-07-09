import React, { FunctionComponent, useCallback, useState } from 'react';
import { map } from 'lodash';

import { TSortingOrder } from '../../services/setting/utils';
import { Button } from '../button';
import { IButtonItem } from './types';
import { handleClickButtonRadio } from './utils';
import { getButtonClassName } from '../button/utils';

import './button-radio.scss';

export interface IButtonRadioProps {
  activeTab: string;
  buttons: IButtonItem[];
  onPress: Function;
  changeSorting: Function;
  sortOrder: TSortingOrder;
}

export const ButtonRadioView: FunctionComponent<IButtonRadioProps> = ({
  activeTab = '',
  onPress,
  buttons = [],
  changeSorting,
  sortOrder,
}) => {
  const [activeTitle, setActiveTitle] = useState<string>(activeTab);
  const hasButtons = buttons.length > 0;
  const buttonsLength = buttons.length - 1;

  const handlePress = useCallback(
    (param: any) => {
      handleClickButtonRadio(param, activeTab, sortOrder, onPress, changeSorting);
      setActiveTitle(param);
    },
    [onPress, activeTab, sortOrder, changeSorting],
  );

  const renderButtons = useCallback(
    () => {
      return (
        hasButtons &&
        map(buttons, ({ id, title }: IButtonItem, index: number) => {
          const className = getButtonClassName(activeTitle === id, index === 0, index === buttonsLength);
          return (
            <Button
              title={title}
              onPress={handlePress}
              className={className}
              key={id}
              param={id}
            />
          );
        })
      );
    },
    [buttons, hasButtons, handlePress, activeTitle],
  )

  return (
    <div className={'button-radio'}>
      {renderButtons()}
    </div>
  );
};

import React, { FunctionComponent, useCallback, useState } from 'react';
import { map } from 'lodash';

import { TSortingOrder } from '../../services/setting/utils';
import { Button } from '../';
import { IButtonItem } from './types';
import { handleClickButtonRadio } from './utils';

import './button-radio.scss';

export interface IButtonRadioProps {
  activeTab: string;
  buttons: IButtonItem[];
  onPress: Function;
  changeSorting?: Function;
  sortOrder: TSortingOrder;
}

export const ButtonRadio: FunctionComponent<IButtonRadioProps> = ({
  activeTab = '',
  onPress,
  buttons = [],
  changeSorting,
  sortOrder,
}) => {
  const [activeTitle, setActiveTitle] = useState<string>(activeTab);
  const hasButtons = buttons.length > 0;

  const handlePress = useCallback(
    (param: any) => {
      handleClickButtonRadio(param, activeTab, sortOrder, onPress, changeSorting);
      setActiveTitle(param);
    },
    [onPress, activeTab, sortOrder],
  );

  const renderButtons = useCallback(
    () => {
      return (
        hasButtons &&
        map(buttons, ({ id, title }: IButtonItem, index: number) => (
          <Button
            title={title}
            onPress={handlePress}
            isActive={activeTitle === id}
            isFirst={index === 0}
            isLast={index === (buttons.length - 1)}
            key={id}
            param={id}
          />
        ))
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

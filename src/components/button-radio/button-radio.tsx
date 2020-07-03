import React, { FunctionComponent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { getSortOrder } from '../../services/setting/selector';
import { TSortingOrder } from '../../services/setting/utils';
import { Button } from '../';
import { IButtonItem } from './types';

import './button-radio.scss';

export interface IButtonRadioProps {
  activeTab: string;
  buttons: IButtonItem[];
  onPress: Function;
}

export interface IButtonRadioDispatchProps extends IButtonRadioProps {
  changeSorting: Function;
}

export const ButtonRadio: FunctionComponent<IButtonRadioDispatchProps> = ({
  activeTab = '',
  onPress,
  buttons = [],
  changeSorting,
}) => {
  const [activeTitle, setActiveTitle] = useState<string>(activeTab);
  const hasButtons = buttons.length > 0;
  const sortOrder = useSelector(getSortOrder);

  const handlePress = useCallback(
    (param: any) => {
      const currentOrder = sortOrder === TSortingOrder.ASK ? TSortingOrder.DESC : TSortingOrder.ASK;
      if (param !== activeTab) {
        onPress(param);
        sortOrder !== TSortingOrder.ASK && changeSorting(TSortingOrder.ASK);
      } else {
        changeSorting(currentOrder);
      }
      setActiveTitle(param);
    },
    [onPress, activeTab, sortOrder],
  );

  const renderButtons = useCallback(
    () => {
      return (
        hasButtons &&
        buttons.map(({ id, title }: IButtonItem, index: number) => {
          return (
            <Button
              title={title}
              onPress={handlePress}
              isActive={activeTitle === id}
              isFirst={index === 0}
              isLast={index === (buttons.length - 1)}
              key={id}
              param={id}
            />
          )
        })
      )
    },
    [buttons, hasButtons, handlePress, activeTitle],
  )

  return (
    <div className={'button-radio'}>
      {renderButtons()}
    </div>
  );
};

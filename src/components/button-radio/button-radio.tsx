import React, { FunctionComponent, useCallback, useState, useMemo } from 'react';
import { map } from 'lodash';

import { TSortingOrder } from '../../services/setting/utils';
import { Button } from '../button';
import { IButtonItem } from './types';
import { handleClickButtonRadio } from './utils';
import createClassNames from 'classnames';

import './button-radio.scss';

export interface IButtonRadioProps {
  activeTab: string;
  buttons: IButtonItem[];
  onPress: Function;
  changeSorting: Function;
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
  const buttonsLength = buttons.length - 1;

  const classNames = useCallback(({ id, index }: { id: string, index: number }) => {
    return createClassNames({ 'button__active': activeTitle === id, 'button__first': index === 0, 'button__last': buttonsLength === index });
  }, [activeTitle, buttonsLength]);

  const handlePress = useCallback(
    (param: any) => {
      handleClickButtonRadio(param, activeTab, sortOrder, onPress, changeSorting);
      setActiveTitle(param);
    },
    [onPress, activeTab, sortOrder, changeSorting],
  );



  const renderButtons = useCallback(
    () => (
      hasButtons &&
      map(buttons, ({ id, title }: IButtonItem, index: number) => (
        <Button
          title={title}
          onPress={handlePress}
          className={classNames({ id, index })}
          key={id}
          param={id}
        />
      ))
    ),
    [buttons, hasButtons, handlePress, classNames],
  )

  return (
    <div className={'button-radio'}>
      {renderButtons()}
    </div>
  );
};

import React, { FunctionComponent, useCallback, useState, useEffect } from 'react';

import { Button } from '../button/button';
import { IButtonItem } from './types';
import './button-radio.scss';

interface IButtonRadioProps {
  buttons: IButtonItem[];
  onPress: (title: string) => void;
}

export const ButtonRadio: FunctionComponent<IButtonRadioProps> = ({
  onPress,
  buttons = [],
}) => {
  const [activeTitle, setActiveTitle] = useState<string>('');
  const hasButtons = buttons.length > 0;

  const handlePress = useCallback(
    (title: any) => {
      onPress(title);
      setActiveTitle(title);
    },
    [onPress],
  );

  useEffect(() => {
    hasButtons && setActiveTitle(buttons[0].title);
  }, [buttons, hasButtons]);

  const renderButtons = useCallback(
    () => {
      return (
        hasButtons &&
        buttons.map(({ id, title, param }: IButtonItem, index: number) => {
          return (
            <Button
              title={title}
              onPress={handlePress}
              isActive={activeTitle === title}
              isFirst={index === 0}
              isLast={index === (buttons.length - 1)}
              key={id}
              param={param}
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

import React, { FunctionComponent, useCallback, useMemo } from 'react';

import { getButtonClassName } from './utils';

import './button.scss';

interface IButtonProps {
  title: string;
  param?: string;
  isActive?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  onPress: (title: string) => void;
}

export const Button: FunctionComponent<IButtonProps> = ({
  title,
  param = title,
  onPress,
  isActive = false,
  isFirst = false,
  isLast = false,
}) => {
  const buttonClassName = useMemo(
    () => getButtonClassName(isActive, isFirst, isLast),
    [isActive, isFirst, isLast],
  );

  const handlePress = useCallback(
    () => {
      onPress(param);
    },
    [title],
  )

  return (
    <div className={buttonClassName} onClick={handlePress}>
      <p className={'button_title'}>{title}</p>
    </div>
  );
};

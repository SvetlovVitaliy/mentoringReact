import React, { FunctionComponent, useCallback, useMemo } from 'react';

import './button.scss';

interface IButtonProps {
  title: string;
  param?: string;
  onPress: (title: string) => void;
  className?: string;
}

export const Button: FunctionComponent<IButtonProps> = ({
  title,
  param = title,
  onPress,
  className = '',
}) => {
  const buttonClassName = useMemo(
    () => {
      const defaultClassName = 'button';
      return className ? `${defaultClassName} ${className}` : defaultClassName;
    },
    [className],
  );

  const handlePress = useCallback(
    () => {
      onPress(param);
    },
    [param, onPress],
  )

  return (
    <div className={buttonClassName} onClick={handlePress}>
      <p className={'button_title'}>{title}</p>
    </div>
  );
};

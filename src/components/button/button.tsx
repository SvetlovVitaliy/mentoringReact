import React, { FunctionComponent, useCallback } from 'react';
import createClassNames from 'classnames';

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
  const handlePress = useCallback(
    () => {
      onPress(param);
    },
    [param, onPress],
  )

  return (
    <div
      className={createClassNames('button', { [className]: !!className })}
      onClick={handlePress}
      id={param}
    >
      <p className={'button_title'}>{title}</p>
    </div>
  );
};

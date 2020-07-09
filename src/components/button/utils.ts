export function getButtonClassName(
  isActive: boolean,
  isFirst: boolean = false,
  isLast: boolean = false
): string {
  let returnClassName = '';

  if (isActive) {
    const classNameActive = 'button__active';
    returnClassName = classNameActive;
  }

  if (isFirst) {
    const classNameFirst = 'button__first';
    const resultClassName = returnClassName ? `${returnClassName} ${classNameFirst}` : classNameFirst;
    returnClassName = resultClassName;
  }

  if (isLast) {
    const classNameLast = 'button__last';
    const resultClassName = returnClassName ? `${returnClassName} ${classNameLast}` : classNameLast;
    returnClassName = resultClassName;
  }

  return returnClassName;
}
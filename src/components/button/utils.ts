export function getButtonClassName(
  isActive: boolean,
  isFirst: boolean = false,
  isLast: boolean = false
): string {
  const defaultClassName = 'button';
  let returnClassName = defaultClassName;

  if (isActive) {
    returnClassName = `${returnClassName} ${defaultClassName}__active`;
  }

  if (isFirst) {
    returnClassName = `${returnClassName} ${defaultClassName}__first`
  }

  if (isLast) {
    returnClassName = `${returnClassName} ${defaultClassName}__last`
  }

  return returnClassName;
}
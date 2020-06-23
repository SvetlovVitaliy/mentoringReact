import { getButtonClassName } from '../utils';

describe('utils button', () => {
  it('getButtonClassName should return correct className', () => {
    const defaultClassName = 'button';

    expect(getButtonClassName(false)).toBe(defaultClassName);

    expect(getButtonClassName(true))
      .toBe(`${defaultClassName} ${defaultClassName}__active`);

    expect(getButtonClassName(false, true))
      .toBe(`${defaultClassName} ${defaultClassName}__first`);

    expect(getButtonClassName(true, true))
      .toBe(`${defaultClassName} ${defaultClassName}__active ${defaultClassName}__first`);

    expect(getButtonClassName(false, false, true))
      .toBe(`${defaultClassName} ${defaultClassName}__last`);

    expect(getButtonClassName(false, true, true))
      .toBe(`${defaultClassName} ${defaultClassName}__first ${defaultClassName}__last`);

    expect(getButtonClassName(true, true, true))
      .toBe(`${defaultClassName} ${defaultClassName}__active ${defaultClassName}__first ${defaultClassName}__last`);

    expect(getButtonClassName(true, false, true))
      .toBe(`${defaultClassName} ${defaultClassName}__active ${defaultClassName}__last`);
  })
})
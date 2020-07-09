import { getButtonClassName } from '../utils';

describe('utils button', () => {
  describe('getButtonClassName should return correct className', () => {
    const defaultClassName = 'button';

    it('isActive=false && isFirst=false && isLast=false', () => {
      expect(getButtonClassName(false)).toBe('');
    });

    it('isActive=true && isFirst=false && isLast=false', () => {
      expect(getButtonClassName(true)).toBe(`${defaultClassName}__active`);
    });

    it('isActive=false && isFirst=true && isLast=false', () => {
      expect(getButtonClassName(false, true)).toBe(`${defaultClassName}__first`);
    });

    it('isActive=true && isFirst=true && isLast=false', () => {
      expect(getButtonClassName(true, true)).toBe(`${defaultClassName}__active ${defaultClassName}__first`);
    });

    it('isActive=false && isFirst=false && isLast=true', () => {
      expect(getButtonClassName(false, false, true)).toBe(`${defaultClassName}__last`);
    });

    it('isActive=false && isFirst=true && isLast=true', () => {
      expect(getButtonClassName(false, true, true)).toBe(`${defaultClassName}__first ${defaultClassName}__last`);
    });

    it('isActive=true && isFirst=false && isLast=true', () => {
      expect(getButtonClassName(true, false, true)).toBe(`${defaultClassName}__active ${defaultClassName}__last`);
    });

    it('isActive=true && isFirst=true && isLast=true', () => {
      expect(getButtonClassName(true, true, true)).toBe(`${defaultClassName}__active ${defaultClassName}__first ${defaultClassName}__last`);
    });
  });
});
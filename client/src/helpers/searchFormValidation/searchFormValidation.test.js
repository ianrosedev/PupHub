import { searchFormValidation } from './searchFormValidation';

describe('searchFormValidation', () => {
  it('if `value` is true return `undefined`', () => {
    expect(searchFormValidation(true)).toBe(undefined);
  });

  it('if `value` is false return `Required Field!`', () => {
    expect(searchFormValidation(false)).toBe('Required Field!');
  });
});

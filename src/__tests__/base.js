import Validator from '../index';

test('Regexp', () => {
  const validatorTrue = new Validator('r123Reg_09-exp');
  const validatorFalse = new Validator('r123Reg_09-exp2');

  expect(validatorTrue.validateUsername()).toEqual([true, false]);
  expect(validatorFalse.validateUsername()).not.toEqual([true, false]);
});

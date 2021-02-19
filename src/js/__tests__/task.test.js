import changePhone from '../task';

test('Метод должен убрать лишние символы и заменить 8 на +7 в российском номере', () => {
  const phone = '8 (927) 000-00-00';
  expect(changePhone(phone)).toBe('+79270000000');
});

test('Метод должен убрать лишние символы в российском номере', () => {
  const phone = '+7 960 000 00 00';
  expect(changePhone(phone)).toBe('+79600000000');
});

test('Метод должен убрать лишние символы в китайском номере', () => {
  const phone = '+86 000 000 0000';
  expect(changePhone(phone)).toBe('+860000000000');
});

test('Метод должен выбросить ошибку, есть не передали параметр или передали пустую строку', () => {
  const phone = '';
  expect(() => changePhone()).toThrow();
  expect(() => changePhone(phone)).toThrow();
});

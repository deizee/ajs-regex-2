export default function changePhone(phone) {
  if (!phone) throw new Error('Вы не передали номер телефона');

  const splitSymbols = phone.replace(/[()-\s]*/g, '');

  if (splitSymbols.length === 11) {
    return splitSymbols.replace(/^8/, '+7');
  }

  return splitSymbols;
}

import getSizeLabel from './getSizeLabel';

test('test getSizeLabel 1', () => {
  expect(getSizeLabel(123456)).toBe('121.0 KB');
});

test('test getSizeLabel 2', () => {
  expect(getSizeLabel(50505)).toBe('49.0 KB');
});

test('test getSizeLabel 3', () => {
  expect(getSizeLabel(3)).toBe('0.0 KB');
});

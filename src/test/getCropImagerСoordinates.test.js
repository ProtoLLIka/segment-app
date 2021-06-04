import getCropImagerСoordinates from './getCropImagerСoordinates';

test('test getCropImagerСoordinates 1', () => {
  expect(
    getCropImagerСoordinates({ x: 0, y: 0, picWidth: 750, picHeight: 750, cropImageSize: 50 }),
  ).toStrictEqual({ x: 50, y: 0 });
});

test('test getCropImagerСoordinates 2', () => {
  expect(
    getCropImagerСoordinates({ x: 100, y: 0, picWidth: 750, picHeight: 750, cropImageSize: 50 }),
  ).toStrictEqual({ x: 150, y: 0 });
});

test('test getCropImagerСoordinates 3', () => {
  expect(
    getCropImagerСoordinates({ x: 500, y: 0, picWidth: 750, picHeight: 750, cropImageSize: 50 }),
  ).toStrictEqual({ x: 550, y: 0 });
});

test('test getCropImagerСoordinates 4', () => {
  expect(
    getCropImagerСoordinates({ x: 700, y: 0, picWidth: 750, picHeight: 750, cropImageSize: 50 }),
  ).toStrictEqual({ x: 750, y: 0 });
});

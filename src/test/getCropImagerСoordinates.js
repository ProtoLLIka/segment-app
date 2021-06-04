const getCropImagerСoordinates = ({ x, y, picWidth, picHeight, cropImageSize }) => {
  if (x <= picWidth - cropImageSize) {
    return { x: x + cropImageSize, y };
  }

  if (y <= picHeight - cropImageSize) {
    return { x: 0, y: y + cropImageSize };
  }

  return { x, y };
};

module.exports = getCropImagerСoordinates;

const selectors = {
  getXPos: (state) => state.x,
  getYPos: (state) => state.y,
  getPicWidth: (state) => state.picWidth,
  getPicHeight: (state) => state.picHeight,
  getCropImageSize: (state) => state.cropImageSize,
  getIsParsing: (state) => state.isParsing,
};

export default selectors;

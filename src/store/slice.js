import { createSlice } from '@reduxjs/toolkit';

import selectors from './selectors';

const initialState = {
  x: 0,
  y: 0,
  picWidth: null,
  picHeight: null,
  cropImageSize: 100,
  isParsing: null,
};

const reducers = {
  setX(state, { payload: x }) {
    state.x = x;
  },
  setY(state, { payload: y }) {
    state.y = y;
  },
  setPicWidth(state, { payload: picWidth }) {
    state.picWidth = picWidth;
  },
  setPicHeight(state, { payload: picHeight }) {
    state.picHeight = picHeight;
  },
  setСoordinates(state, { payload: { x, y } }) {
    state.x = x;
    state.y = y;
  },
  setCropImageSize(state, { payload: cropImageSize }) {
    state.cropImageSize = cropImageSize;
  },
  setIsParsing(state, { payload: isParsing }) {
    state.isParsing = isParsing;
  },
};

const { actions, reducer } = createSlice({
  name: 'store',
  reducers,
  initialState,
});

export { actions, selectors };

export default reducer;

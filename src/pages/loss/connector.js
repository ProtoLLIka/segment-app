import { connect } from 'react-redux';

import { actions, selectors } from 'store/slice';

import View from './view';

const mapStateToProps = (state) => ({
  x: selectors.getXPos(state),
  y: selectors.getYPos(state),
  picWidth: selectors.getPicWidth(state),
  picHeight: selectors.getPicHeight(state),
  cropImageSize: selectors.getCropImageSize(state),
  isParsing: selectors.getIsParsing(state),
});

const mapDispatchToProps = {
  setX: actions.setX,
  setY: actions.setY,
  setPicWidth: actions.setPicWidth,
  setPicHeight: actions.setPicHeight,
  setСoordinates: actions.setСoordinates,
  setIsParsing: actions.setIsParsing,
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(View);

export default ConnectedComponent;

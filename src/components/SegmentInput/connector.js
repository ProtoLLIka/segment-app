import { connect } from 'react-redux';

import { actions } from 'store/slice';

import Controller from './controller';

const mapStateToProps = (state) => ({
  cropImageSize: state.cropImageSize,
});

const mapDispatchToProps = {
  setCropImageSize: actions.setCropImageSize,
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Controller);

export default ConnectedComponent;

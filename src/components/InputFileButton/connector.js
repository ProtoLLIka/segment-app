import { connect } from 'react-redux';

import { actions } from 'store/slice';

import View from './view';

const mapDispatchToProps = {
  setFileInfo: actions.setFileInfo,
};

const ConnectedComponent = connect(null, mapDispatchToProps)(View);

export default ConnectedComponent;

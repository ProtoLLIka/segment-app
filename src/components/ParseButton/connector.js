import { connect } from 'react-redux';

import { actions } from 'store/slice';

import View from './view';

const mapDispatchToProps = {
  setIsParsing: actions.setIsParsing,
};

const ConnectedComponent = connect(null, mapDispatchToProps)(View);

export default ConnectedComponent;

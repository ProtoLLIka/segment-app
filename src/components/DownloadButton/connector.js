import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = (state) => ({
  isParsing: state.isParsing,
  fileInfo: state.fileInfo,
});

const ConnectedComponent = connect(mapStateToProps)(View);

export default ConnectedComponent;

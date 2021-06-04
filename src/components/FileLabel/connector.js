import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = (state) => ({
  fileInfo: state.fileInfo,
});

const ConnectedComponent = connect(mapStateToProps)(View);

export default ConnectedComponent;

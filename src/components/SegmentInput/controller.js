import React, { useState } from 'react';

import View from './view';

const Controller = ({ cropImageSize, ...rest }) => {
  const [value, setValue] = useState(cropImageSize);

  return <View value={value} setValue={setValue} {...rest} cropImageSize={cropImageSize} />;
};

export default Controller;

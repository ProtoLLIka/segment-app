import { createAsyncThunk } from '@reduxjs/toolkit';

const generateAsyncAction = (actionName, actionHandler) => {
  const handler = createAsyncThunk(actionName, async (...args) => {
    const { data: response } = await actionHandler(...args);

    return { ...response, params: args[0] };
  });

  return handler;
};

export default generateAsyncAction;

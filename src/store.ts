import { configureStore } from '@reduxjs/toolkit';
import ApiPost from './api/post';
import ApiGet from './api/fetch';

const store = configureStore({
  reducer: {
    [ApiPost.reducerPath]: ApiPost.reducer,
    [ApiGet.reducerPath]: ApiGet.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiPost.middleware, ApiGet.middleware),
});

export default store;

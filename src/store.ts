import { configureStore } from '@reduxjs/toolkit';
import ApiPost from './api/post';
import ApiGet from './api/fetch';
import ApiPostToken from './api/postToken';

const store = configureStore({
  reducer: {
    [ApiPost.reducerPath]: ApiPost.reducer,
    [ApiGet.reducerPath]: ApiGet.reducer,
    [ApiPostToken.reducerPath] : ApiPostToken.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiPost.middleware, ApiGet.middleware , ApiPostToken.middleware),
});

export default store;

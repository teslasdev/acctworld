import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ApiPost = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => ({
        url: '/auth/signin',
        method: 'POST',
        body: data,
      }),
    }),

    signUp: builder.mutation({
        query: (data) => ({
          url: '/auth/signup',
          method: 'POST',
          body: data,
        }),
      }),
  }),
});

export const { useSignInMutation , useSignUpMutation } = ApiPost;
export default ApiPost;

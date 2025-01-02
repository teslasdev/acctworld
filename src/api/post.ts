import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '.';

const ApiPost = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => ({
        url: '/auth/signin',
        method: 'POST',
        body: data,
      }),
    }),

    forGot: builder.mutation({
      query: (data) => ({
        url: '/auth/password-reset',
        method: 'POST',
        body: data,
      }),
    }),

    reset: builder.mutation({
      query: (data) => ({
        url: '/auth/reset-password',
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
    payement: builder.mutation({
      query: (data) => ({
        url: '/api/payment/initiate',
        method: 'POST',
        body: data,
      }),
    }),

    
  }),
});

export const { useSignInMutation, useSignUpMutation , usePayementMutation , useForGotMutation , useResetMutation  } = ApiPost;
export default ApiPost;

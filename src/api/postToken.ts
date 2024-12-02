import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
const ApiPostToken = createApi({
  reducerPath: 'api-token',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://acctworld-server.onrender.com',
    prepareHeaders: (headers) => {
      const token = Cookies.get('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
  
    payement: builder.mutation({
      query: (data) => ({
        url: '/api/payment/initiate',
        method: 'POST',
        body: data,
      }),
    }),

    order: builder.mutation({
      query: (data) => ({
        url: '/api/order/initiate',
        method: 'POST',
        body: data,
      }),
    }),
    verification: builder.mutation({
        query: (data) => ({
          url: '/api/payment/verify',
          method: 'POST',
          body: data,
        }),
      }),
  }),
});

export const { usePayementMutation, useVerificationMutation , useOrderMutation } = ApiPostToken;
export default ApiPostToken;

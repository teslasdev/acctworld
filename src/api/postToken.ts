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
    },
  }),
  endpoints: (builder) => ({
    categories: builder.mutation({
      query: (data) => ({
        url: '/api/categories',
        method: 'POST',
        body: data,
      }),
    }),

    editCategory: builder.mutation({
      query: (data) => ({
        url: `/api/categories/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),

    editType: builder.mutation({
      query: ({id , data}) => ({
        url: `/api/types/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),

    types: builder.mutation({
      query: (data) => ({
        url: '/api/types',
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

    products: builder.mutation({
      query: (data) => ({
        url: '/api/product',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  usePayementMutation,
  useVerificationMutation,
  useOrderMutation,
  useCategoriesMutation,
  useTypesMutation,
  useEditCategoryMutation,
  useEditTypeMutation,
  useProductsMutation
} = ApiPostToken;
export default ApiPostToken;

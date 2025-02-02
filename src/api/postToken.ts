import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { baseUrl } from '.';
const ApiPostToken = createApi({
  reducerPath: 'api-token',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
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
      query: ({ id, data }) => ({
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

    updateProducts: builder.mutation({
      query: (data) => ({
        url: `/api/product/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (data) => ({
        url: `/api/product/delete?product_id=${data.id}`,
        method: 'DELETE',
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: '/auth/change-password',
        method: 'POST',
        body: data,
      }),
    }),
    
    UpdateBalance: builder.mutation({
      query: (data) => ({
        url: '/api/admin/balance/update',
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
  useProductsMutation,
  useUpdateProductsMutation,
  useDeleteProductMutation,
  useChangePasswordMutation,
  useUpdateBalanceMutation
} = ApiPostToken;
export default ApiPostToken;

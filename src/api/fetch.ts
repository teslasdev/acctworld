import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { baseUrl } from '.';

const ApiGet = createApi({
  reducerPath: 'api-get',
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
    getMe: builder.query<any, void>({
      query: () => ({
        url: '/auth/get-me',
        method: 'GET',
      }),
    }),
    products: builder.query<any, { typeId: number; category: any }>({
      query: ({ typeId, category }) => ({
        url: `/api/product?type=${typeId}&category=${category}`,
        method: 'GET',
      }),
    }),
    type: builder.query<any, void>({
      query: () => ({
        url: '/api/type',
        method: 'GET',
      }),
    }),
    category: builder.query<any, void>({
      query: () => ({
        url: '/api/categories',
        method: 'GET',
      }),
    }),
    payments: builder.query<any, void>({
      query: () => ({
        url: '/api/payments',
        method: 'GET',
      }),
    }),
    analystics: builder.query<any, void>({
      query: () => ({
        url: '/api/analystic',
        method: 'GET',
      }),
    }),
    orders: builder.query<any, void>({
      query: () => ({
        url: '/api/orders',
        method: 'GET',
      }),
    }),

    // Admin Routes
    getPayments: builder.query<any, void>({
      query: () => ({
        url: '/api/admin/payments',
        method: 'GET',
      }),
    }),

    getAalystics: builder.query<any, void>({
      query: () => ({
        url: '/api/admin/analystic',
        method: 'GET',
      }),
    }),

    getUsers: builder.query<any, void>({
      query: () => ({
        url: '/api/admin/users',
        method: 'GET',
      }),
    }),

    getOrders: builder.query<any, void>({
      query: () => ({
        url: '/api/admin/orders',
        method: 'GET',
      }),
    }),

    getProductById: builder.query<any, {id : any}>({
      query: (id) => ({
        url: `/api/product/one?product_id=${id}`,
        method: 'GET',
      }),
    }),
    getTypesById: builder.query<any, {id : any}>({
      query: (id) => ({
        url: `/api/type/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetMeQuery,
  useProductsQuery,
  useTypeQuery,
  useCategoryQuery,
  usePaymentsQuery,
  useAnalysticsQuery,
  useOrdersQuery,
  useGetPaymentsQuery,
  useGetAalysticsQuery,
  useGetUsersQuery,
  useGetOrdersQuery,
  useGetProductByIdQuery,
  useGetTypesByIdQuery
} = ApiGet;
export default ApiGet;

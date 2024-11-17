import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const ApiGet = createApi({
  reducerPath: 'api-get',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
    prepareHeaders: (headers) => {
      const token = Cookies.get('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getMe: builder.query<any , void>({
      query: () => ({
        url: '/auth/get-me',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetMeQuery } = ApiGet;
export default ApiGet;

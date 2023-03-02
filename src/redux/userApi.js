import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'constants/constants-url';

export const userApi = createApi({
  reducerPath: 'userApi',

  baseQuery,
  tagTypes: ['Users'],

  endpoints: builder => ({
    register: builder.mutation({
      query: values => ({
        url: `/users/signup`,
        method: 'POST',
        body: {
          name: values.name,
          email: values.email,
          password: values.password,
        },
      }),
      invalidatesTags: ['Users'],
    }),
    login: builder.mutation({
      query: values => ({
        url: `/users/login`,
        method: 'POST',
        body: {
          email: values.email,
          password: values.password,
        },
      }),
      invalidatesTags: ['Users'],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['Users'],
    }),
    getCurrent: builder.query({
      query: () => `/users/current`,
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useGetCurrentQuery,
  useLogOutMutation,
  useLoginMutation,
} = userApi;

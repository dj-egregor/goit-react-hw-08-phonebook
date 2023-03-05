import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'constants/constants-url';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery,
  tagTypes: ['Contacts'],

  refetchOnMountOrArgChange: true,

  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts', 'Users'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: { name: values.name, number: values.number },
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query: values => ({
        url: `/contacts/${values.id}`,
        method: 'PATCH',
        body: { name: values.name, number: values.number },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
  useUpdateContactMutation,
} = contactApi;

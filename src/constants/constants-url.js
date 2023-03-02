import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

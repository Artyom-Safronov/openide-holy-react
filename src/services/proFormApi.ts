import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ProFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  licenses: string;
}

export interface ProFormResponse {
  success: boolean;
  message?: string;
}

export const proFormApi = createApi({
  reducerPath: 'proFormApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    submitProForm: builder.mutation<ProFormResponse, ProFormData>({
      query: (data) => ({
        url: 'api/pro-form',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSubmitProFormMutation } = proFormApi;

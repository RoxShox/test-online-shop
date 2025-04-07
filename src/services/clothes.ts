// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MainItem } from '../type/globalType'

// Define a service using a base URL and expected endpoints
export const clothesApi = createApi({
	reducerPath: 'clothesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://test-online-shop.vercel.app/',
	}),
	endpoints: builder => ({
		allClothes: builder.query<MainItem[], void>({
			query: () => `/clothes`,
		}),
	}),
})

export const { useAllClothesQuery } = clothesApi

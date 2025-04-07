// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MainItem } from '../type/globalType'

// Define a service using a base URL and expected endpoints
export const eatApi = createApi({
	reducerPath: 'eatApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://test-online-shop.vercel.app/',
	}),
	endpoints: builder => ({
		allEat: builder.query<MainItem[], void>({
			query: () => `/eat`,
		}),
	}),
})

export const { useAllEatQuery } = eatApi

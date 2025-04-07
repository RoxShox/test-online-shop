import { configureStore } from '@reduxjs/toolkit'
import { clothesApi } from '../services/clothes'
import { eatApi } from '../services/eat'
import { electronicApi } from '../services/electronic'
import cartSlice from './slices/cart'
import sortSlice from './slices/sort'

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		sort: sortSlice,
		[eatApi.reducerPath]: eatApi.reducer,
		[clothesApi.reducerPath]: clothesApi.reducer,
		[electronicApi.reducerPath]: electronicApi.reducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			eatApi.middleware,
			clothesApi.middleware,
			electronicApi.middleware
		),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

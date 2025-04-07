import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MainItem } from '../../type/globalType'

interface IProduct extends MainItem {
	count: number
}

interface CartState {
	products: IProduct[]
	totalSum: number
	totalCountProducts: number
}

const initialState: CartState = {
	products: [],
	totalSum: 0,
	totalCountProducts: 0,
}

export const cartSlice = createSlice({
	name: 'cart',

	initialState,
	reducers: {
		deleteProducts: (state, action: PayloadAction<number>) => {
			state.products = state.products.filter(prod => prod.id !== action.payload)
			state.totalSum = state.products.reduce(
				(acc, cur) => acc + cur.price * cur.count,
				0
			)
		},
		addProduct: (state, action: PayloadAction<IProduct>) => {
			const isExistItemInArr = state.products.find(
				el => el.id === action.payload.id
			)
			if (isExistItemInArr) {
				isExistItemInArr.count = isExistItemInArr.count + action.payload.count
			} else {
				state.products.push(action.payload)
			}
			state.totalSum = state.products.reduce(
				(acc, cur) => acc + cur.price * cur.count,
				0
			)
		},
		incrementCountProducts: (state, action) => {
			const currentProducts = state.products.find(
				el => el.id === action.payload
			)
			if (currentProducts) {
				currentProducts.count++
			}
			state.totalSum = state.products.reduce(
				(acc, cur) => acc + cur.price * cur.count,
				0
			)
		},
		decrementCountProducts: (state, action) => {
			const currentProducts = state.products.find(
				el => el.id === action.payload
			)
			if (currentProducts && currentProducts.count > 0) {
				currentProducts.count--
			} else {
				return
			}
			state.totalSum = state.products.reduce(
				(acc, cur) => acc + cur.price * cur.count,
				0
			)
		},
		// calculateTotalSum: state => {
		// 	state.totalSum = state.products.reduce((acc, cur) => acc + cur.price, 0)
		// },
	},
})

export const {
	deleteProducts,
	addProduct,
	decrementCountProducts,
	incrementCountProducts,
} = cartSlice.actions

export default cartSlice.reducer

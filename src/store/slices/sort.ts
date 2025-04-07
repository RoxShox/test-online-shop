import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SortOptionsType } from '../../components/SortBar/SortBar'
import { FiltersType } from '../../type/globalType'

interface SortState {
	sortOption: SortOptionsType
	currentFilter: FiltersType
}

const initialState: SortState = {
	sortOption: {
		id: 'none',
		value: 'none',
		label: 'Без сортировки',
		sorting: 'asc',
	},
	currentFilter: {
		value: 'all',
		label: 'Без фильтра',
	},
}

export const sortSlice = createSlice({
	name: 'sort',

	initialState,
	reducers: {
		setSortOption: (state, action: PayloadAction<SortOptionsType>) => {
			state.sortOption = action.payload
		},
		setFilter: (state, action: PayloadAction<FiltersType>) => {
			state.currentFilter = action.payload
		},
	},
})

export const { setSortOption, setFilter } = sortSlice.actions

export default sortSlice.reducer

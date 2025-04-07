import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material'
import { memo } from 'react'
import { sortOptions } from '../../constants/constants'
import { SortValues } from '../../type/globalType'

export type SortOptionsType = {
	id: string
	sorting: 'asc' | 'desc'
	value: SortValues
	label: string
}

interface ISortBar {
	currentSort: SortOptionsType | null
	onSortChange: (values: any) => void
}

const SortBar = ({ currentSort, onSortChange }: ISortBar) => {
	const handleSortChange = (event: SelectChangeEvent<string>) => {
		const selectedSort = sortOptions.find(
			option => option.id === event.target.value
		)
		onSortChange(selectedSort || null)
	}

	return (
		<FormControl variant='outlined' sx={{ margin: 3 }}>
			<InputLabel>Сортировать по</InputLabel>
			<Select
				value={currentSort?.id}
				onChange={handleSortChange}
				label='Сортировать по'
			>
				{sortOptions.map(option => (
					<MenuItem key={option.id} value={option.id}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default memo(SortBar)

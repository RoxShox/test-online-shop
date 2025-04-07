import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material'
import { FiltersType } from '../../type/globalType'

interface IFilters {
	filterOptions: FiltersType[]
	setFilter: (obj: FiltersType) => void
	currentFilter: FiltersType
}

const Filters = ({ filterOptions, setFilter, currentFilter }: IFilters) => {
	const handleFilterChange = (event: SelectChangeEvent<string>) => {
		const selectedFilter = filterOptions.find(
			option => option.value === event.target.value
		)
		if (selectedFilter) {
			setFilter(selectedFilter)
		} else {
			return
		}
	}

	return (
		<FormControl variant='outlined' sx={{ margin: 3 }}>
			<InputLabel>Сортировать по</InputLabel>
			<Select
				value={currentFilter.value}
				onChange={handleFilterChange}
				label='Сортировать по'
			>
				{filterOptions.map((option: FiltersType) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default Filters

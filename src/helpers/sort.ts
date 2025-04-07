import { SortOptionsType } from '../components/SortBar/SortBar'
import { MainItem } from '../type/globalType'

export const sortItem = (products: MainItem[], sortOption: SortOptionsType) => {
	if (!sortOption) return products

	return [...products].sort((a, b) => {
		if (sortOption.value === 'price') {
			return sortOption.sorting === 'asc'
				? a.price - b.price
				: b.price - a.price
		} else if (sortOption.value === 'name') {
			return sortOption.sorting === 'asc'
				? a.name.localeCompare(b.name)
				: b.name.localeCompare(a.name)
		}
		return 0
	})
}

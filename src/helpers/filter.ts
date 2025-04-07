import { FiltersType, MainItem } from '../type/globalType'

export const filterItem = (filterOption: FiltersType, products: MainItem[]) => {
	if (filterOption.value === 'all') {
		return products
	} else {
		return products.filter(el => el.category === filterOption.label)
	}
}

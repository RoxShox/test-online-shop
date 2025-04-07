export type MainItem = {
	id: number
	name: string
	price: number
	category: string
	count: number
}

export type SortValues = 'price' | 'name' | 'none'

export type FiltersType = {
	label: string
	value: string
}

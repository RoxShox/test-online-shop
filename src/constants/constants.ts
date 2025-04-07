import { SortOptionsType } from '../components/SortBar/SortBar'

export const sortOptions: SortOptionsType[] = [
	{ id: 'price-asc', value: 'price', label: 'Цена asc', sorting: 'asc' },
	{ id: 'price-desc', value: 'price', label: 'Цена desc', sorting: 'desc' },
	{ id: 'name-asc', value: 'name', label: 'Имя asc', sorting: 'asc' },
	{ id: 'name-desc', value: 'name', label: 'Имя desc', sorting: 'desc' },
	{ id: 'none', value: 'none', label: 'Без сортировки', sorting: 'asc' },
]

export const eatFilterOptions = [
	{
		value: 'all',
		label: 'Без фильтра',
	},
	{
		value: 'zern',
		label: 'Зерновые',
	},
	{
		value: 'fruits',
		label: 'Фрукты',
	},
	{
		value: 'veget',
		label: 'Овощи',
	},
	{
		value: 'meat',
		label: 'Мясо',
	},
	{
		value: 'milk',
		label: 'Молочные продукты',
	},
]

export const clothesFilterOptions = [
	{
		value: 'all',
		label: 'Без фильтра',
	},
	{
		value: 'shoes',
		label: 'Обувь',
	},
	{
		value: 'man',
		label: 'Мужская одежда',
	},
	{
		value: 'woman',
		label: 'Женская одежда',
	},
	{
		value: 'low',
		label: 'Низ одежды',
	},
	{
		value: 'sport',
		label: 'Спортивная одежда',
	},
]

export const electronicFilterOptions = [
	{
		value: 'all',
		label: 'Без фильтра',
	},
	{
		value: 'comp',
		label: 'Компьютеры',
	},
	{
		value: 'audio',
		label: 'Аудио и видео',
	},
	{
		value: 'mobile',
		label: 'Мобильные устройства',
	},
]

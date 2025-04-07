import { Box, Pagination } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import Filters from '../../components/Filters/Filters'
import ProductItem from '../../components/ProductItem/ProductItem'
import SortBar, { SortOptionsType } from '../../components/SortBar/SortBar'
import { filterItem } from '../../helpers/filter'
import { sortItem } from '../../helpers/sort'
import { usePagination } from '../../hooks/usePagination'
import { FiltersType, MainItem } from '../../type/globalType'

const ProductPage = ({ currentFilterOptions, data, isLoading, error }: any) => {
	const [sortOption, setSortOption] = useState<SortOptionsType>({
		id: 'none',
		value: 'none',
		label: 'Без сортировки',
		sorting: 'asc',
	})
	const [filterOption, setFilterOption] = useState<FiltersType>({
		value: 'all',
		label: 'Без фильтра',
	})
	const sortProducts = useCallback(
		(products: MainItem[]) => {
			return sortItem(products, sortOption)
		},
		[sortOption]
	)
	const sortedProducts = sortProducts(data ?? [])

	const filterProducts = useCallback(
		(products: MainItem[]) => {
			return filterItem(filterOption, products)
		},
		[filterOption]
	)
	const filteredProducts = filterProducts(sortedProducts)

	const { totalPage, currentItems, setPage, curPage } =
		usePagination(filteredProducts)

	useEffect(() => {
		setPage(1)
	}, [filterOption])

	if (isLoading) {
		return <h1>Загрузка</h1>
	}
	if (error) {
		return <h1>ошибка</h1>
	}

	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Filters
					filterOptions={currentFilterOptions}
					setFilter={setFilterOption}
					currentFilter={filterOption}
				/>
				<SortBar currentSort={sortOption} onSortChange={setSortOption} />
			</div>

			{error ? (
				<>ERROR</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<Box
					sx={{
						display: 'grid',
						gap: 1,
						gridTemplateColumns: 'repeat(3, 1fr)',
					}}
				>
					{currentItems?.map((el: MainItem) => (
						<ProductItem key={el.id} item={el} />
					))}
				</Box>
			) : (
				<div>Отсутствуют данные</div>
			)}

			<Pagination
				count={totalPage}
				page={curPage}
				onChange={(e, page) => setPage(page)}
			/>
		</div>
	)
}

export default ProductPage

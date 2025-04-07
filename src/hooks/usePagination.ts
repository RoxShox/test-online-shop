import { useState } from 'react'
import { MainItem } from '../type/globalType'

interface IPagination {
	currentItems: MainItem[]
	totalPage: number
	setPage: (page: number) => void
	curPage: number
}

export const usePagination = (products: MainItem[]): IPagination => {
	const [curPage, setCurPage] = useState<number>(1)

	const itemsPerPage = 10
	const indexOfLastItem = curPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem)
	const calculateTotalPage = products ? Math.ceil(products?.length / 10) : 0

	const handleClickPage = (page: number) => {
		setCurPage(page)
	}

	return {
		currentItems,
		totalPage: calculateTotalPage,
		setPage: handleClickPage,
		curPage,
	}
}

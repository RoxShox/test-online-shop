import ProductPage from '../../components/ProductPage/ProductPage'
import { clothesFilterOptions } from '../../constants/constants'
import { useAllClothesQuery } from '../../services/clothes'

const ClothesPage = () => {
	const { data, error, isLoading } = useAllClothesQuery()
	return (
		<ProductPage
			data={data}
			error={error}
			isLoading={isLoading}
			currentFilterOptions={clothesFilterOptions}
		/>
	)
}

export default ClothesPage

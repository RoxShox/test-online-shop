import ProductPage from '../../components/ProductPage/ProductPage'
import { eatFilterOptions } from '../../constants/constants'
import { useAllEatQuery } from '../../services/eat'

const EatPage = () => {
	const { data, error, isLoading } = useAllEatQuery()

	return (
		<ProductPage
			data={data}
			error={error}
			isLoading={isLoading}
			currentFilterOptions={eatFilterOptions}
		/>
	)
}

export default EatPage

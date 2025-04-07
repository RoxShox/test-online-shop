import ProductPage from '../../components/ProductPage/ProductPage'
import { electronicFilterOptions } from '../../constants/constants'
import { useAllElectronicQuery } from '../../services/electronic'

const ElectronicPage = () => {
	const { data, error, isLoading } = useAllElectronicQuery()
	return (
		<ProductPage
			data={data}
			error={error}
			isLoading={isLoading}
			currentFilterOptions={electronicFilterOptions}
		/>
	)
}

export default ElectronicPage

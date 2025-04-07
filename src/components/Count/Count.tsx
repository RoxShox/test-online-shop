import { Button } from '@mui/material'
import { memo } from 'react'
import { MainItem } from '../../type/globalType'

interface ICount {
	count: number
	product: MainItem
	inc: (id: number) => void
	dec: (id: number) => void
}

const Count = memo(({ count, product, inc, dec }: ICount) => {
	const handleCLickInc = () => {
		inc(product.id)
	}
	const handleCLickDec = () => {
		dec(product.id)
	}

	return (
		<div style={{ display: 'flex', columnGap: 5, alignItems: 'center' }}>
			<Button variant='contained' onClick={handleCLickDec}>
				-
			</Button>
			<h1>{count}</h1>
			<Button variant='contained' onClick={handleCLickInc}>
				+
			</Button>
		</div>
	)
})

export default Count

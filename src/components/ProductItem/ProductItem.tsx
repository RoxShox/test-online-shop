import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useCallback, useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { addProduct } from '../../store/slices/cart'
import { MainItem } from '../../type/globalType'
import Count from '../Count/Count'

interface IProductItem {
	item: MainItem
}

export default function ProductItem({ item }: IProductItem) {
	const [value, setValue] = useState<number>(0)
	const dispatch = useAppDispatch()
	const handleClickBuyProduct = () => {
		let newItem = { ...item, count: value }
		dispatch(addProduct(newItem))
		setValue(0)
	}
	const incrementCount = useCallback(() => {
		setValue(prev => prev + 1)
	}, [])
	const decrementCount = useCallback(() => {
		setValue(prev => {
			if (prev > 0) {
				return prev - 1
			} else {
				return 0
			}
		})
	}, [])
	return (
		<Card sx={{}}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{item.name}
					</Typography>
					<Typography variant='body2' sx={{ color: 'text.secondary' }}>
						{item.price} р.
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					size='small'
					variant={value === 0 ? 'outlined' : 'contained'}
					disabled={value === 0}
					onClick={handleClickBuyProduct}
				>
					Купить
				</Button>
				<Count
					product={item}
					count={value}
					inc={incrementCount}
					dec={decrementCount}
				/>
			</CardActions>
		</Card>
	)
}

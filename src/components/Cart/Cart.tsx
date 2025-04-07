import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { blue } from '@mui/material/colors'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
	decrementCountProducts,
	deleteProducts,
	incrementCountProducts,
} from '../../store/slices/cart'
import Count from '../Count/Count'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

const Cart = () => {
	const [state, setState] = React.useState({
		right: false,
	})
	const { products, totalSum } = useAppSelector(state => state.cart)
	const dispatch = useAppDispatch()

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return
			}

			setState({ ...state, [anchor]: open })
		}

	const handleClickDeleteItem = (id: number) => {
		dispatch(deleteProducts(id))
	}

	const handleClickInc = React.useCallback(
		(id: number) => {
			dispatch(incrementCountProducts(id))
		},
		[dispatch]
	)
	const handleClickDec = React.useCallback(
		(id: number) => {
			dispatch(decrementCountProducts(id))
		},
		[dispatch]
	)

	const list = (anchor: Anchor) => (
		<Box role='presentation'>
			<button onClick={toggleDrawer(anchor, false)}>X</button>
			<List
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					rowGap: 3,
				}}
			>
				{products.map(el => (
					<Box
						sx={{
							minWidth: 200,
							background: blue[200],
							borderRadius: 10,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
						key={el.id}
					>
						<h1 style={{ fontSize: 20 }}>{el.name}</h1>
						<p>{el.price}</p>
						<Count
							key={el.id}
							product={el}
							dec={handleClickDec}
							inc={handleClickInc}
							count={el.count}
						/>
						<button onClick={() => handleClickDeleteItem(el.id)}>
							Удалить товар
						</button>
					</Box>
				))}
			</List>
			<h1>Итогова стоимость:{totalSum}</h1>
		</Box>
	)

	return (
		<div>
			{(['right'] as const).map(anchor => (
				<React.Fragment key={anchor}>
					<Button sx={{ color: 'white' }} onClick={toggleDrawer(anchor, true)}>
						Открыть корзину
					</Button>
					<Drawer
						PaperProps={{
							sx: { width: 500, display: 'flex', flexDirection: 'column' }, // Установите ширину здесь
						}}
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{products.length < 1 ? <h1>Корзина пустая</h1> : list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	)
}

export default React.memo(Cart)

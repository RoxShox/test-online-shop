import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'

interface Props {
	window?: () => Window
}

const navItems = [
	{
		title: 'Eat',
		path: '/eat',
	},
	{
		title: 'Clothes',
		path: '/clothes',
	},
	{
		title: 'Electronic',
		path: '/electronic',
	},
]

export default function NavBar(props: Props) {
	return (
		<Box sx={{ display: 'flex', minHeight: 64 }}>
			<CssBaseline />
			<AppBar component='nav'>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							sx={{ mr: 2, display: { sm: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' component='div'>
							MUI
						</Typography>
						<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							{navItems.map(item => (
								<Button key={item.path} sx={{ color: '#fff' }}>
									<Link to={item.path}>{item.title}</Link>
								</Button>
							))}
						</Box>
					</Box>
					<Cart />
				</Toolbar>
			</AppBar>
		</Box>
	)
}

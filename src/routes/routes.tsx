import { Route, Routes } from 'react-router-dom'
import ClothesPage from '../pages/ClothesPage/ClothesPage'
import EatPage from '../pages/EatPage/EatPage'
import ElectronicPage from '../pages/ElectronicPage/ElectronicPage'
import NoMatchPage from '../pages/NoMatchPage/NoMatchPage'

const AppRoutes = () => {
	const navigationRoutes = [
		{ path: '/clothes', element: <ClothesPage /> },
		{ path: '/eat', element: <EatPage /> },
		{ path: '/electronic', element: <ElectronicPage /> },
		{ path: '/*', element: <NoMatchPage /> },
	]

	return (
		<Routes>
			{navigationRoutes.map(route => (
				<Route key={route.path} element={route.element} path={route.path} />
			))}
		</Routes>
	)
}

export default AppRoutes

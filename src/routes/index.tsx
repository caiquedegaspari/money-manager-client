import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/sign-up',
		element: <SignUp />,
	},
	{
		path: '/home',
		element: <Home />,
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};

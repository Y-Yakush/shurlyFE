import { Root } from '@/pages/Root';
import { AuthPage } from '@/pages/auth';
import { MainPage } from '@/pages/main';
import { SettingPage } from '@/pages/settings/Settings';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/auth',
				element: <AuthPage />,
			},
			{
				path: '/auth/:type',
				element: <AuthPage />,
			},
			{
				path: '/links',
				element: <div>links</div>,
			},
			{
				path: '/links/:short_url',
				element: <div>link 'short_url'</div>,
			},
			{
				path: '/lists/:roster-uuid',
				element: <div>list 'roster uuid'</div>,
			},
			{
				path: '/short-url',
				element: <div>short url</div>,
			},
			{
				path: '/short-list',
				element: <div>short list</div>,
			},
			{
				path: '/settings',
				element: <SettingPage/>,
			},
			{
				path: '/password',
				element: <div>password</div>,
			},
		],
	},
]);

import { Header } from '@/features/header';
import { theme } from '@/shared/theme';
import { Outlet } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Footer } from '@/shared/components/footer';

export const Root = () => {
	return (
		<MantineProvider theme={theme}>
			<Header />
			<div style={{ minHeight: 'calc(100vh - 158px)', display: 'flex' }}>
				<Outlet />
			</div>
			<Footer />
		</MantineProvider>
	);
};

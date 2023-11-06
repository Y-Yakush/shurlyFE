import {
	Group,
	Button,
	Divider,
	Box,
	Burger,
	Drawer,
	ScrollArea,
	rem,
	Avatar,
	UnstyledButton,
	Text,
	Menu,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
	IconLogout,
	IconSettings,
	IconSwitchHorizontal,
	IconChevronDown,
} from '@tabler/icons-react';

import classes from './header.module.css';
import { Logo } from '@/shared/components/logo';
import { useState } from 'react';
import cx from 'clsx';
import { Link } from 'react-router-dom';
import { URLS } from '@/routes/urls';

const user = {
	name: 'dayjora',
	email: 'janspoon@fighter.dev',
	image:
		'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
};

export function Header() {
	const [userMenuOpened, setUserMenuOpened] = useState(false);
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false);

	const auth = false;

	return (
		<Box>
			<header className={classes.header}>
				<Group justify='space-between' h='100%'>
					<Logo />
					{auth ? (
						<>
							<Group h='100%' visibleFrom='sm'>
								<Button>Short URL</Button>
								<Button variant='default'>Short link</Button>

								<Link to='/' className={classes.link}>
									Links
								</Link>
								<Link to='/' className={classes.link}>
									Lists
								</Link>
							</Group>

							<Group justify='space-between'>
								<Menu
									width={260}
									position='bottom-end'
									transitionProps={{ transition: 'pop-top-right' }}
									onClose={() => setUserMenuOpened(false)}
									onOpen={() => setUserMenuOpened(true)}
									withinPortal
								>
									<Menu.Target>
										<UnstyledButton
											className={cx(classes.user, {
												[classes.userActive]: userMenuOpened,
											})}
										>
											<Group gap={7}>
												<Avatar
													src={user.image}
													alt={user.name}
													radius='xl'
													size={20}
												/>
												<Text fw={500} size='sm' lh={1} mr={3}>
													{user.name}
												</Text>
												<IconChevronDown
													style={{ width: rem(12), height: rem(12) }}
													stroke={1.5}
												/>
											</Group>
										</UnstyledButton>
									</Menu.Target>
									<Menu.Dropdown>
										<Menu.Label>Settings</Menu.Label>
										<Menu.Item
											leftSection={
												<IconSettings
													style={{ width: rem(16), height: rem(16) }}
													stroke={1.5}
												/>
											}
										>
											Account settings
										</Menu.Item>
										<Menu.Item
											leftSection={
												<IconSwitchHorizontal
													style={{ width: rem(16), height: rem(16) }}
													stroke={1.5}
												/>
											}
										>
											Change password
										</Menu.Item>
										<Menu.Item
											leftSection={
												<IconLogout
													style={{ width: rem(16), height: rem(16) }}
													stroke={1.5}
												/>
											}
										>
											Logout
										</Menu.Item>
									</Menu.Dropdown>
								</Menu>
							</Group>
						</>
					) : (
						<Group visibleFrom='sm'>
							<Link to={URLS.login}><Button variant='default'>Log in</Button></Link>
							<Link to={URLS.register}><Button>Sign up</Button></Link>
						</Group>
					)}

					<Burger
						opened={drawerOpened}
						onClick={toggleDrawer}
						hiddenFrom='sm'
					/>
				</Group>
			</header>

			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size='100%'
				padding='md'
				title='Navigation'
				hiddenFrom='sm'
				zIndex={1000000}
			>
				<ScrollArea h={`calc(100vh - ${rem(80)})`} mx='-md'>
					<Divider my='sm' />

					<a href='#' className={classes.link}>
						Home
					</a>

					<a href='#' className={classes.link}>
						Links
					</a>
					<a href='#' className={classes.link}>
						Lists
					</a>

					<Divider my='sm' />

					<Group justify='center' grow pb='xl' px='md'>
						<Button variant='default'>Log in</Button>
						<Button>Sign up</Button>
					</Group>
				</ScrollArea>
			</Drawer>
		</Box>
	);
}

import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './dots';
import classes from './main.module.css';
import { Link } from 'react-router-dom';
import { URLS } from '@/routes/urls';

export function MainPage() {
	return (
		<Container className={classes.wrapper} size={1400}>
			<Dots className={classes.dots} style={{ left: 0, top: 0 }} />
			<Dots className={classes.dots} style={{ left: 60, top: 0 }} />
			<Dots className={classes.dots} style={{ left: 0, top: 140 }} />
			<Dots className={classes.dots} style={{ right: 0, top: 60 }} />

			<div className={classes.inner}>
				<Title className={classes.title}>
					Create {' '}
					<Text component='span' className={classes.highlight} inherit>
						shorter URLs
					</Text>{' '}
					with SH.URLY
				</Title>

				<Container p={0} size={600}>
					<Text size='lg' c='dimmed' className={classes.description}>
						Service for automatic shortening of links. Shorten URLs, set link
						expiration dates and visit limits, view visit statistics in your
						account!
					</Text>
				</Container>

				<div className={classes.controls}>
					<Link to={URLS.login}>
						<Button
							className={classes.control}
							size='lg'
							variant='default'
							color='gray'
						>
							Log In
						</Button>
					</Link>

					<Link to={URLS.register}>
						<Button className={classes.control} size='lg'>
							Sign Up
						</Button>
					</Link>
				</div>
			</div>
		</Container>
	);
}

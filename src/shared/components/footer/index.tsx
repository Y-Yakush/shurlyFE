import { Container, Group, ActionIcon, rem } from '@mantine/core';
import classes from './footer.module.css';
import { LogoSM } from '../logo-sm';
import { IconBrandGithub } from '@tabler/icons-react';

export function Footer() {
	return (
		<div className={classes.footer}>
			<Container className={classes.inner}>
				<LogoSM />
				<Group
					gap={0}
					className={classes.links}
					justify='flex-end'
					wrap='nowrap'
				>
					<a href='https://github.com/Y-Yakush/shurly' className={classes.link}>
						<ActionIcon
							size='lg'
							color='gray'
							style={{ pointerEvents: 'none' }}
							variant='subtle'
						>
							<IconBrandGithub
								style={{ width: rem(18), height: rem(18) }}
								stroke={1.5}
							/>
						</ActionIcon>
						Y-Yakush test project 2022
					</a>
				</Group>
			</Container>
		</div>
	);
}

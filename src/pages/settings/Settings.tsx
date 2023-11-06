import { Button, Center, Container, TextInput, Title } from '@mantine/core';
import classes from './settings.module.css';

export function SettingPage() {
	const email = 'dayjora@jopa.com';
	const name = 'dayjopa';
	return (
		<Center w={'100%'}>
			<Container
				size={'lg'}
				style={{ gap: '12px', display: 'flex', flexDirection: 'column' }}
			>
				<Title order={1}>Profile settings</Title>
				<TextInput label='Email' placeholder={email} classNames={classes} />
				<TextInput label='Name' placeholder={name} classNames={classes} />
                <Button className={classes.control} size='lg'>
							Update
						</Button>
			</Container>
		</Center>
	);
}

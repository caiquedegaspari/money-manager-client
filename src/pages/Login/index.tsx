import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

export const Login = () => {
	return (
		<Box
			sx={{
				backgroundColor: theme.palette.primary.light,
				width: '100vw',
				height: '100vh',
			}}
			display="flex"
			justifyContent="space-between"
		>
			<Box width="50%" paddingTop={10} paddingLeft={25}>
				<Typography color="primary.dark" fontWeight={600} fontSize="62px">
					CMoney Manager
				</Typography>
				<Typography
					marginTop={20}
					color="background.paper"
					fontWeight={600}
					fontSize="52px"
				>
					Gerencie suas <br /> finanças de maneira
					<br /> simples e{' '}
					<span style={{ fontSize: '52px', color: theme.palette.primary.dark }}>
						eficiente.
					</span>
				</Typography>
			</Box>
			<Box width="50%" alignSelf="center">
				<Card
					sx={{
						padding: '45px',
						width: '25vw',
						height: '45vh',
						borderRadius: 6,
					}}
				>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="space-between"
						height="100%"
					>
						<Typography fontWeight={600} fontSize="32px" color="primary.dark">
							Login
						</Typography>
						<Box marginTop="auto" display="flex" flexDirection="column">
							<TextField label="Digite seu E-mail" variant="standard" />
							<TextField
								sx={{ marginTop: '50px' }}
								label="Digite sua senha"
								variant="standard"
							/>
						</Box>
						<Button
							sx={{
								marginTop: 'auto',
								marginBottom: '25px',
								alignSelf: 'center',
								textTransform: 'capitalize',
								fontSize: '18px',
								width: '70%',
								height: '40px',
								fontWeight: '600',
							}}
							variant="contained"
						>
							Entrar
						</Button>
						<Typography color="gray" alignSelf="center">
							Não possui conta?{' '}
							<Link to="/sign-up">
								<span
									style={{
										color: theme.palette.primary.dark,
									}}
								>
									Crie sua conta!
								</span>
							</Link>
						</Typography>
					</Box>
				</Card>
			</Box>
		</Box>
	);
};

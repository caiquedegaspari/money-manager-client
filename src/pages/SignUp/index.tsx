import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

export const SignUp = () => {
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
			<Box
				width="50%"
				height="85%"
				display="flex"
				flexDirection="column"
				justifyContent="space-around"
				marginLeft={15}
			>
				<Typography color="primary.dark" fontWeight={600} fontSize="62px">
					CMoney Manager
				</Typography>
				<Card
					sx={{
						padding: '45px',
						paddingTop: '25px',
						paddingBottom: '20px',
						width: '25vw',
						height: '45vh',
						borderRadius: 6,
					}}
				>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="space-around"
						height="100%"
					>
						<Typography fontWeight={600} fontSize="32px" color="primary.dark">
							Criar conta
						</Typography>
						<Box display="flex" flexDirection="column">
							<TextField
								sx={{ marginTop: '15px' }}
								label="Digite seu nome"
								variant="standard"
							/>
							<TextField
								sx={{ marginTop: '15px' }}
								label="Digite seu E-mail"
								variant="standard"
							/>
							<TextField
								sx={{ marginTop: '15px' }}
								label="Digite sua senha"
								variant="standard"
							/>
						</Box>
						<Button
							sx={{
								alignSelf: 'center',
								textTransform: 'none',
								fontSize: '18px',
								width: '70%',
								height: '40px',
								fontWeight: '600',
							}}
							variant="contained"
						>
							Criar conta
						</Button>
						<Typography color="gray" alignSelf="center">
							Já possui cadastro?{' '}
							<Link to="/">
								<span
									style={{
										color: theme.palette.primary.dark,
									}}
								>
									Faça login!
								</span>
							</Link>
						</Typography>
					</Box>
				</Card>
			</Box>
			<Box width="50%" paddingTop={10} paddingLeft={25}>
				<Typography
					marginTop={20}
					color="background.paper"
					fontWeight={600}
					fontSize="52px"
				>
					Controle suas <br /> finanças de forma
					<br /> prática e{' '}
					<span style={{ fontSize: '52px', color: theme.palette.primary.dark }}>
						rápida.
					</span>
				</Typography>
			</Box>
		</Box>
	);
};

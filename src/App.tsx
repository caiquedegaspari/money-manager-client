import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { Router } from './routes';
import { Box } from '@mui/material';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Router />
			</Box>
		</ThemeProvider>
	);
}

export default App;

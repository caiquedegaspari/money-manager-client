import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#665687',
			light: '#BA99FF',
			dark: '#450981',
		},
		background: {
			default: '#F6F6F6',
		},
		error: {
			main: '#D94646',
		},
		success: {
			main: '#46D954',
		},
		info: {
			main: '#46B5D9',
		},
		text: {
			primary: '#fff',
		},
		warning: {
			main: '#D98C46',
		},
		grey: {
			'200': '#727272',
			'300': '#888',
			'700': '#404040',
		},
	},
});

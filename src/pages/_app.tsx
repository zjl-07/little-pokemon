import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/globalStyle';
import { defaultTheme, darkTheme } from '@/styles/theme';

const App = ({ Component, pageProps }) => {
	console.log('APP', pageProps);
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={defaultTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default App;

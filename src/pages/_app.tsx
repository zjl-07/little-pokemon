import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/globalStyle';
import { defaultTheme, darkTheme } from '@/styles/theme';
import { AppProps } from 'next/dist/shared/lib/router/router';

const App: FC<AppProps> = ({ Component, pageProps }) => {
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

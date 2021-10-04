import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/dist/shared/lib/router/router';

import { GlobalStyle } from '@styles/globalStyle';
import { defaultTheme, darkTheme } from '@styles/theme';

import { Store, GlobalContext } from '@contexts/global';

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<Store>
			<GlobalStyle />
			<GlobalContext.Consumer>
				{({ state: { useDarkTheme } }) => (
					<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
						<Component {...pageProps} />
					</ThemeProvider>
				)}
			</GlobalContext.Consumer>
		</Store>
	);
};

export default App;

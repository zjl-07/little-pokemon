import React, { FC, useMemo, memo } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import { Store, GlobalContext } from '@contexts/global';

import { GlobalStyle } from '@styles/globalStyle';
import { defaultTheme, darkTheme } from '@styles/theme';

import Indonesia from '@languages/id.json';
import English from '@languages/en.json';

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const { locale } = useRouter();

	const dictionary = useMemo(() => {
		switch (locale) {
			case 'en-US':
				return English;
			case 'id':
			default:
				return Indonesia;
		}
	}, []);

	return (
		<Store>
			<GlobalStyle />
			<GlobalContext.Consumer>
				{({ state: { useDarkTheme } }) => (
					<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
						<IntlProvider
							messages={dictionary}
							locale={`${locale}`}
							defaultLocale='id'
						>
							<Component {...pageProps} />
						</IntlProvider>
					</ThemeProvider>
				)}
			</GlobalContext.Consumer>
		</Store>
	);
};

export default memo(App);

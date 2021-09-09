import '../../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import Blog from '../components/blog';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<Blog />
		</>
	);
}
export default MyApp;

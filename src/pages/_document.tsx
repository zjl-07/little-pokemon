import React, { ReactElement } from 'react';
import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import configs from '@configs/env';

const renderGTMSnippet = () => (
	<script
		dangerouslySetInnerHTML={{
			__html: `
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','${configs.GTM_CONTAINER_ID}');
		  `,
		}}
	/>
);

const renderGTMSnippetNoScript = () => (
	<noscript
		dangerouslySetInnerHTML={{
			__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${configs.GTM_CONTAINER_ID}}"
			height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
		}}
	/>
);

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					// eslint-disable-next-line react/display-name
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render(): ReactElement {
		return (
			<Html lang='ja-JP'>
				<Head>
					{this.props.styles}
					<link rel='preconnect' href='https://fonts.googleapis.com'></link>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					></link>
					<link
						href='https://fonts.googleapis.com/css2?family=PT+Sans&display=swap'
						rel='stylesheet'
					></link>
					{renderGTMSnippet()}
				</Head>
				<body>
					<Main />
					<div id='modal'></div>
					<NextScript />
					{renderGTMSnippetNoScript()}
				</body>
			</Html>
		);
	}
}

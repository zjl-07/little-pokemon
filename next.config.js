/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const webpack = require('webpack');
const path = require('path');

const { parsed: parsedEnv } = require('dotenv').config({
	path: path.join(__dirname, '/.env'),
});

module.exports = {
	reactStrictMode: true,
	i18n: {
		locales: ['en-US', 'id'],
		defaultLocale: 'id',
	},
	webpack(config) {
		config.plugins.push(new webpack.EnvironmentPlugin(parsedEnv));
		return config;
	},
};

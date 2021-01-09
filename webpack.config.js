/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const dotenv = require('dotenv');

dotenv.config();
const { NODE_ENV = 'production' } = process.env;

module.exports = {
	mode: NODE_ENV,
	target: 'node',
	entry: {
		main: './src/index.ts',
	},
	resolve: {
		extensions: ['.webpack.js', '.web.js', '.js', '.ts'],
	},
	output: {
		publicPath: '/',
		path: path.join(__dirname, '/dist'),
		filename: '[name].build.js',
	},
	module: {
		rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
	},
	externals: [nodeExternals()],
};

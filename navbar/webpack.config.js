module.exports = {
	entry: './src/navbar.js',
	output: {
		filename: 'navbar.js',
		path: __dirname + '/dist',
		libraryTarget: 'system',
		publicPath: '/',
	},
	mode: 'development',
	devServer: {
		port: 8503,
		historyApiFallback: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

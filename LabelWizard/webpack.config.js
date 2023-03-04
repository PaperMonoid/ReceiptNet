const path = require('path');


module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
	path: path.join(__dirname, 'dist'),
	filename: 'main.bundle.js'
    },
    mode: process.env.NODE_ENV || 'development',
    module: {
	rules: [
	    {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: {
		    loader: "babel-loader"
		}
	    }
	],
    },
};

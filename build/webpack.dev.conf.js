
var webpack = require('webpack');


module.exports = {
	'entry' : './src/index',
	'output': {
		'path'         : './dist',
		'library'      : 'Observer',
		'filename'     : 'Observer.js',
		'libraryTarget': 'umd'
	},
	module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            }
        ]
    },
	babel: {
        "presets": ["es2015"],
        "plugins": ["transform-runtime"]
    },
	'plugins': []
}
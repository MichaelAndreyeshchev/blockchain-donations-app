//UNUSED




const path = require('path');

module.exports = {
    entry: {
        index: path.join(__dirname, '/src/js/react/index.js')
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 1235,
        watchContentBase: true, //watch for changes
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //match js regex
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-laoder'
                ]
            }
        ]
    }
}
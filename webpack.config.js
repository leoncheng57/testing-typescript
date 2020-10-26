const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');


const html = {
    test: /\.html$/,
    use: ['html-loader']
};

const ts = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /(node_modules)/,
}


const config = {
    entry: './src/index.ts',
    module: {
      rules: [html, ts]
    },
    // resolve: {
    //     extensions: [ '.tsx', '.ts', '.js' ],
    // },
    plugins: [
        new LiveReloadPlugin({
            appendScriptTag: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        })
    ],
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].js'
    },
    devServer: {
        port: 3000,
    }
  };

module.exports = config;
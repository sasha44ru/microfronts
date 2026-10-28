const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { AngularWebpackPlugin } = require('@ngtools/webpack');
const deps = require('./package.json').dependencies;

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: { publicPath: 'auto', clean: true },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@mf-demo/ui-kit': path.resolve(__dirname, '../ui-kit/src/index.js'),
        },
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: '@ngtools/webpack' },
            {
                test: /\.s[ac]ss$/i,
                oneOf: [
                    {
                        include: path.resolve(__dirname, '../ui-kit/src'),
                        exclude: /tokens\.scss$/,
                        use: [
                            { loader: 'css-loader', options: { exportType: 'string' } },
                            'sass-loader',
                        ],
                    },
                    {
                        use: ['style-loader', 'css-loader', 'sass-loader'],
                    },
                ],
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
    },
    plugins: [
        new AngularWebpackPlugin({
            tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        }),
        new ModuleFederationPlugin({
            name: 'remoteAngular',
            filename: 'remoteEntry.js',
            exposes: { './AngularMount': './src/mount.ts' },
            shared: {
                '@angular/core': { singleton: true, requiredVersion: deps['@angular/core'] },
                rxjs: { singleton: true, requiredVersion: deps.rxjs },
            },
        }),
        new HtmlWebpackPlugin({ template: './public/index.html' }),
    ],
    devServer: {
        port: 3003,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
    },
};
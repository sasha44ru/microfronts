const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const deps = require('./package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: 'auto',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@mf-demo/ui-kit': path.resolve(__dirname, '../ui-kit/src/index.js'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'chrome 100' }],
                            ['@babel/preset-react', { runtime: 'automatic' }],
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new ModuleFederationPlugin({
            name: 'remoteReact',
            filename: 'remoteEntry.js',
            exposes: {
                './UsersPage': './src/UsersPage.tsx',
            },
            shared: {
                react: { singleton: true, requiredVersion: deps.react },
                'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
            },
        }),
    ],
    devServer: {
        port: 3001,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
    },
};
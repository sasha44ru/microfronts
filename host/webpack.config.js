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
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@mf-demo/ui-kit': path.resolve(__dirname, '../ui-kit/src/index.js'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
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
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                remoteReact: 'remoteReact@http://localhost:3001/remoteEntry.js',
                remoteVue: 'remoteVue@http://localhost:3002/remoteEntry.js',
                remoteAngular: 'remoteAngular@http://localhost:3003/remoteEntry.js',
            },
            shared: {
                react: { singleton: true, requiredVersion: deps.react },
                'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
                vue: { singleton: true, requiredVersion: deps.vue },
            },
        }),
        new HtmlWebpackPlugin({ template: './public/index.html' }),
    ],
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
};
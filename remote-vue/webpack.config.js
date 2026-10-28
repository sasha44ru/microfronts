const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { VueLoaderPlugin } = require('vue-loader');
const deps = require('./package.json').dependencies;

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: { publicPath: 'auto', clean: true },
    resolve: {
        extensions: ['.vue', '.ts', '.js'],
        alias: {
            '@mf-demo/ui-kit': path.resolve(__dirname, '../ui-kit/src/index.js'),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        isCustomElement: (tag) => tag.startsWith('ui-'),
                    },
                },
            },
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'chrome 100' }],
                            ['@babel/preset-typescript', { allExtensions: true }],
                        ],
                    },
                },
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            name: 'remoteVue',
            filename: 'remoteEntry.js',
            exposes: { './RegistryMount': './src/mount.ts' },
            shared: { vue: { singleton: true, requiredVersion: deps.vue } },
        }),
        new HtmlWebpackPlugin({ template: './public/index.html' }),
    ],
    devServer: {
        port: 3002,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
    },
};
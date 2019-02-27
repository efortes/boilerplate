const webpack = require('webpack')
const path = require('path')

module.exports = function(env, { mode }) {
    const isDev = mode === 'development'

    const config = {
        entry: {
            app: path.resolve(__dirname, 'src/app.js'),
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    include: [
                        path.resolve(__dirname, 'src/'),
                        path.resolve(__dirname, 'app/src'),
                        path.resolve(__dirname, 'src/app.js'),
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            alias: {},
        },
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: '[name].bundle.js',
            libraryTarget: 'commonjs2', // this line says “Hey, our Output should be an exportable module!”
        },
        externals: {
           // lodash: 'commonjs lodash',
        },
        plugins: [new webpack.HotModuleReplacementPlugin()],
        devServer: {
            contentBase: './dist',
            hot: true,
        },
    }

    config.module.rules.push({
        test: /.*\.svg$/,
        use: [
            {
                loader: 'svg-inline-loader',
                options: {
                    removeSVGTagAttrs: false,
                    removeTags: true,
                    removingTags: ['title', 'desc'],
                },
            },
        ],
    })

    config.plugins.push(
        new webpack.DefinePlugin({
            REDUX_DEV_TOOLS: isDev
                ? JSON.stringify(true)
                : JSON.stringify(false),
        })
    )

    const paths = {
        '@fgw/test': './src/test',
    }

    Object.keys(paths).forEach(key => {
        config.resolve.alias[key] = path.join(__dirname, paths[key])
    })

    return config
}

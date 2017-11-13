const webpack = require('webpack');
const path = require('path');
const nodeEnv = process.env.NODE_ENV || 'development';
console.log("BUILD IN ", nodeEnv);
const isProd = nodeEnv === 'production';
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const exit = path.join(__dirname, 'public', 'build');


const plugins = [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
        'process.env': {NODE_ENV: JSON.stringify(nodeEnv)}
    })
];
const jsLoader = [
    "babel-loader"
];
const cssLoader = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
        {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
        }

    ]
});
if (!isProd) {
    jsLoader.push("eslint-loader");
} else {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true,
            sequences: true,
            properties: true,
            dead_code: true,
            drop_debugger: true,
            conditionals: true,
            evaluate: true,
            booleans: true,
            loops: true,
            unused: true,
            hoist_funs: true,
            if_return: true,
            join_vars: true,
            cascade: true,
            negate_iife: true,
        },
        comments: false,
        sourceMap: false,
        output: {screw_ie8: true}
    }));
}

module.exports = {
    devtool: isProd ? 'hidden-source-map' : 'source-map',
    context: path.join(__dirname),
    entry: {
        app: path.join(__dirname, "src", "index.js")
    },
    output: {
        path: exit,
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: jsLoader
            },
            {
                test: /\.(scss|sass|css)$/,
                use: cssLoader
            },
            {
                test: /\.json$/,
                use: [{loader: 'json-loader'}]
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [
            'node_modules',
            path.join(__dirname, "src")
        ]
    },
    plugins: plugins
};
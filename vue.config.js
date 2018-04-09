const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");

if (process.env.NODE_ENV === 'production') {
    module.exports = {
        configureWebpack: {
            plugins: [
                //new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/)
                new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
                new webpack.optimize.AggressiveMergingPlugin(),
                new CompressionPlugin(),
            ]
        }
    };
}


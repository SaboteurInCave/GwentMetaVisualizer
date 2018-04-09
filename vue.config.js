const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

if (process.env.NODE_ENV === 'production') {
    module.exports = {
        configureWebpack: {
            plugins: [
                //new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/)
                new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
                new webpack.optimize.AggressiveMergingPlugin(),
                new CompressionPlugin(),
                //new BundleAnalyzerPlugin()
            ]
        }
    };
}


const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        index: "index.html",
        historyApiFallback: true
    },
    entry: "./app/src/main.js",
    output: {
        filename: 'ready.js',
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
              },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: false
                    }
                }
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        exclude: /(node_modules)/,
                        plugins: [
                            // Stage 0
                            "@babel/plugin-proposal-function-bind",
                            // Stage 1
                            "@babel/plugin-proposal-export-default-from",
                            "@babel/plugin-proposal-logical-assignment-operators",
                            ["@babel/plugin-proposal-optional-chaining", {
                                loose: false
                            }],
                            [
                                "@babel/plugin-proposal-pipeline-operator",
                                {
                                    proposal: "minimal"
                                }
                            ],
                            [
                                "@babel/plugin-proposal-nullish-coalescing-operator",
                                {
                                    loose: false
                                }
                            ],
                            "@babel/plugin-proposal-do-expressions",
                            // Stage 2
                            ["@babel/plugin-proposal-decorators", {
                                legacy: true
                            }],
                            "@babel/plugin-proposal-function-sent",
                            "@babel/plugin-proposal-export-namespace-from",
                            "@babel/plugin-proposal-numeric-separator",
                            "@babel/plugin-proposal-throw-expressions",
                            // Stage 3
                            "@babel/plugin-syntax-dynamic-import",
                            "@babel/plugin-syntax-import-meta",
                            ["@babel/plugin-proposal-class-properties", {
                                loose: false
                            }],
                            "@babel/plugin-proposal-json-strings"
                        ]
                    },

                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new HtmlWebpackPlugin({
            template: "./app/src/index.html",
            filename: "index.html"
        })
    ]
}
const webpack = require("webpack");
const Path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
var Promise = require("es6-promise-promise");

module.exports = function(env) {
  const NODE_ENV = (() => {
    return env.environment === "development" ? "development" : "production";
  })();

  return {
    entry: {
      bundle: "./src/js/index.tsx"
    },
    output: {
      path: Path.join(__dirname, "dist"),
      filename: "js/[name].js"
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    devtool: NODE_ENV === "development" ? "cheap-module-eval-source-map" : "nosources-source-map",
    module: {
      loaders: [
        {
          test: /\.(tsx|ts|js)$/,
          exclude: /node_modules/,
          use: ["ts-loader"]
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: ["style-loader"],
            use: [
              "css-loader",
              "postcss-loader",
              {
                loader: "sass-loader",
                options: {
                  data: `$environment: ${NODE_ENV};`
                }
              }
            ]
          })
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          loader: "file-loader?name=./images/[name].[ext]"
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(NODE_ENV)
        }
      }),
      new ExtractTextPlugin({
        filename: "[name].css"
      }),
      () => {
        if (NODE_ENV !== "development") return new webpack.optimize.UglifyJsPlugin({ sourceMap: true });
      },
      new HTMLWebpackPlugin({
        template: "src/index.html"
      })
    ]
  };
};

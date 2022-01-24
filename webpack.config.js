const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => {
  console.log(`mode is: ${mode}`);

  return {
    mode,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "/dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|svg|jpeg|ico)$/i,
          exclude: /node_modules/,
          loader: "url-loader",
        },
        {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          exclude: /node_modules/,
          loader: "file-loader",
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.sass$/i,
          exclude: /node_modules/,
          use: ["sass-loader"],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
    devServer: {
      open: true,
    },
  };
};

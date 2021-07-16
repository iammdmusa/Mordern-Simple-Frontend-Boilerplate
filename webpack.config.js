const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const  { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path =  require("path");

let mode = "development";
let target = "web";
if(process.env.NODE_ENV === "production"){
    mode = "production";
    target = "browserslist"
}
module.exports = {
    mode: mode,
    target: target,
    output: {
        path: path.resolve(__dirname, "build"),
        assetModuleFilename: "images/[hash][ext][query]",
    },
    module: {
        rules:[
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/i,
                type: "asset",
            },
            {
                test: /\.(s[ac|c])ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    }, 
                    "css-loader", 
                    "postcss-loader", 
                    "sass-loader"
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [ 
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    resolve: {
        // extensions: [".js", ".jsx"],
        extensions: [".js"],
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist/",
        hot: true,
    }
}
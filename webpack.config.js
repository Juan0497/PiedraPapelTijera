const path = require("path")

const basePath = __dirname;
const distPath = "docs";

const webpackInitConfig = {
    mode: "development",
    resolve: {
        extensions: [".js",".html"]
    },
    entry: {
        app: ["./index.html"],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
             {
              test: /\.html$/,
              use: [
              {
                  loader: 'html-loader',
               },
                 ],
            },
         ]
    }
};
module.exports = webpackInitConfig;
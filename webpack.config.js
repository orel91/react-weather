const webpack = require("webpack");

module.exports = {
    entry: [
        "script!jquery/dist/jquery.min.js", // script! calls the script-loader module to pack scripts to modules that webpack understands
        "script!foundation-sites/dist/foundation.min.js",
        "./app/app.jsx"
    ],
    externals: {
        jquery: "jQuery"
    },
    plugins: [ // Allows webpack to resolve $ and jQuery without requiring jquery in each file
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        })
    ],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: "app/components/Main.jsx",
            Nav: "app/components/Nav.jsx",
            Weather: "app/components/Weather.jsx",
            WeatherForm: "app/components/WeatherForm.jsx",
            WeatherMessage: "app/components/WeatherMessage.jsx",
            About: "app/components/About.jsx",
            Examples: "app/components/Examples.jsx",
            openWeatherMap: "app/api/openWeatherMap.jsx",
        },
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /\.jsx?$/, //Specify file types we want to include
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: "cheap-module-eval-source-map" //Useful to separate bundle to files when debugging
};
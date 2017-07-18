var webpack = require('webpack');
const path = require('path');
module.exports ={
    entry:"./src/index.js",
    output:{
        path: path.resolve(__dirname, 'src'),
        filename:"bundle.js",
        publicPath:"assets"
    },
    devServer:{
        inline:true,
        contentBase:"./01",
        port:3000
    },
    module:{
        loader:[{
            test:"/\.js$/",
            exclude:/(node_modules)/,
            query:{
                presets:["latest", "stage-0", "react"]
            }
        }]
    }
}
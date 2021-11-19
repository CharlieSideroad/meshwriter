const mix = require("laravel-mix");
mix.js(
    [
        "resources/js/index.js",
        "resources/js/scene.js",
        "resources/js/meshwriter.js",
    ],
    "js"
)
    .vue()
    .postCss("resources/css/app.css", "css")
    .sourceMaps()
    .disableSuccessNotifications()
    .browserSync("http://localhost:8000"); //npm i -D browser-reload-plugin

/* post in public:
 postcss.config.js

module.exports = {
    plugins: [
        require('postcss-custom-properties')
    ]
}

npm install postcss-custom-properties --save-dev


**/
/*const BrowserReloadPlugin = require("browser-reload-plugin");
plugins: [new BrowserReloadPlugin()];**/

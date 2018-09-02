// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
    development: {
        js: ['js/jquery.1.11.3.min.js', 'js/sharedspace-js.js'],
        css: ['css/sharedspace-styles.css']
    },
    production: {
        js: ['dist/js/sharedspace.dist.js'],
        css: ['css/sharedspace-styles.css']
    }
}
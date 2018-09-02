/**
* Dependencies.
*/
// var gulp = require('gulp'),
//     util = require('gulp-util'),
//     concat = require('gulp-concat'),
//     minifycss = require('gulp-minify-css'),
//     uglify = require('gulp-uglify'),
//     imagemin = require('gulp-imagemin');

// // assets is where you define your application assets and you can pass them into gulp.
// var assets = require('./assets');

// // change the working directory to the public folder, where your assets are located.
// var gulpFileCwd = __dirname +'/public';
// process.chdir(gulpFileCwd);
// // print the working directory
// util.log('Working directory changed to', util.colors.magenta(gulpFileCwd));

// // the default task that is run with the command 'gulp'
// gulp.task('default', function(){

//     // concat and minify your css
//     gulp.src(assets.development.css)
//         .pipe(concat('styles.css'))
//         .pipe(minifycss())
//         .pipe(gulp.dest('./css/'));

//     // concat and minify your js
//     gulp.src(assets.development.js)
//         .pipe(concat('scripts.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./js/'));

//     // optimize your images
//     gulp.src('./images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('./images/'));

// });


var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var del = require('del');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var compass = require('gulp-compass');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var babel_core = require('babel-core');
var babel = require('gulp-babel');



var AUTOPREFIXER_BROWSERS = [
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

// ============================================================================
//  Main Tasks
// ============================================================================

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

// Default task is build
gulp.task('default', ['build']);

// Development task (watch alias)
gulp.task('dev', ['watch']);

// Build task
gulp.task('build', ['clean'], function() {
    gulp.start(['styles', 'scripts', 'images']);
});

// Styles task
gulp.task('styles', function() {
    return gulp.src([
            './public/sass/proper-styles.scss'
        ])
        .pipe(sourcemaps.init())
        .pipe(compass({
            config_file: './public/sass/config.rb',
            css: './public/css',
            sass: './public/sass'
        }))
        .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css/'))
        .pipe(browserSync.reload({stream:true}));
});

// Scripts task
gulp.task('scripts', function() {
    return gulp.src([
            './public/js/jquery.1.11.3.min.js',             
            './public/sharedspace-js.js'                            
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('sharedspace.dist.js'))
        .pipe(uglify())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/dist/js/'))
        .pipe(browserSync.reload({stream:true}));
});

//Images
gulp.task('images', function() {
    return gulp.src('./public/images/*/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./public/dist/images/'));
});

// ============================================================================
//  Build Tasks
// ============================================================================

/**
 * Clean directories
 *
 * @since 0.1.0
 */
gulp.task('clean', function() {
    del([
        './public/css/*.css',
        '!./public/css/font-awesome.min.css',
        './public/js/*.dist.js'
    ]);
});

// END BUILD

// ============================================================================
//  Dev Tasks
// ============================================================================

/**
 * Execute tasks when files are change and live reload web page, and servers
 *
 * @since 0.1.0
 */
gulp.task('watch', function() {
    gulp.watch('./public/sass/**/*.scss', ['styles']);
    gulp.watch('./public/js/*.js', ['scripts']);
    gulp.watch('./public/images/*', ['images']);
    gulp.watch("*.html", ['bs-reload']);
});

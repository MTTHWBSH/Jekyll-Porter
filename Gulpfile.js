var gulp = require('gulp'),
	shell = require('gulp-shell'),
	minifyHTML = require('gulp-minify-html'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	jpegtran = require('imagemin-jpegtran'),
	gifsicle = require('imagemin-gifsicle'),
	optipng = require('imagemin-optipng'),
	sass = require('gulp-sass'),
	importCSS = require('gulp-import-css'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	notify = require("gulp-notify"),
	rename = require('gulp-rename');

gulp.task('default', ['html', 'images']);

gulp.task('jekyll', function() {
  return gulp.src('index.html', { read: false })
    .pipe(shell([
      'jekyll build'
  ]));
});

gulp.task('html', ['jekyll'], function() {
  var opts = {
    conditionals: true,
    quotes:true
  };
 
  return gulp.src('_site/*/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('_site/'));
});

gulp.task('css', function() {
// var options = {};
// options.sass = {
//   errLogToConsole: true,
//   sourceMap: 'sass',
//   sourceComments: 'map',
//   precision: 10,
// };
// options.autoprefixer = {
//   map: true,
//   from: 'css',
//   to: 'main.css'
// };

  return gulp.src('css/main.scss')
   // .pipe(sass(options.sass))
   // .pipe(autoprefixer(options.autoprefixer))
   // .pipe(minifyCSS({keepBreaks:false}))
   // .pipe(rename('main.css'))
   .pipe(sass())
   .pipe(gulp.dest('_site/css/'));
});

gulp.task('images', ['jekyll'], function () {
    return gulp.src('assets/images/**')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant(), jpegtran(), optipng(), gifsicle()]
        }))
        .pipe(gulp.dest('_site/images'));
});

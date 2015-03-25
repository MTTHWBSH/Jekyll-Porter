var gulp = require('gulp');

var shell = require('gulp-shell');
var	minifyHTML = require('gulp-minify-html');
var	imagemin = require('gulp-imagemin');
var	pngquant = require('imagemin-pngquant');
var	jpegtran = require('imagemin-jpegtran');
var	gifsicle = require('imagemin-gifsicle');
var	optipng = require('imagemin-optipng');
var	sass = require('gulp-sass');
var	importCss = require('gulp-import-css');
var	autoprefixer = require('gulp-autoprefixer');
var	minifyCss = require('gulp-minify-css');
var	rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('jekyll', function() {
  return gulp.src('index.html', { read: false })
    .pipe(shell([
      'jekyll build'
  ]));
});

gulp.task('html', ['jekyll'], function() {
    return gulp.src('_site/**/*.html')
        .pipe(minifyHTML({
            quotes: true
        }))
        .pipe(gulp.dest('_site/'));
});

gulp.task('css', ['jekyll'], function() {
   return gulp.src('css/main.scss')
       .pipe(sass())
       .pipe(importCss())
       .pipe(autoprefixer())
       .pipe(minifyCss({keepBreaks:false}))
       .pipe(rename('main.css'))
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

gulp.task('build', ['html', 'css', 'images']);

var gulp = require('gulp'),
    shell = require('gulp-shell');
    minifyHTML = require('gulp-minify-html');
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    jpegtran = require('imagemin-jpegtran'),
    gifsicle = require('imagemin-gifsicle'),
    optipng = require('imagemin-optipng');
    sass = require('gulp-sass'),
    importCss = require('gulp-import-css'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename');

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
    return gulp.src('images/**')
        .pipe(plugins.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant(), jpegtran(), optipng(), gifsicle()]
        }))
        .pipe(gulp.dest('_site/images'));
});

gulp.task('build', ['html', 'css', 'images']);

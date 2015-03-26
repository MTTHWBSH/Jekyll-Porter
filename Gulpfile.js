var gulp = require('gulp');

var shell = require('gulp-shell');
var	minifyHTML = require('gulp-minify-html');
var	imagemin = require('gulp-imagemin');
var	pngquant = require('imagemin-pngquant');
var	jpegtran = require('imagemin-jpegtran');
var	gifsicle = require('imagemin-gifsicle');
var	optipng = require('imagemin-optipng');
var	sass = require('gulp-sass');
var	importCSS = require('gulp-import-css');
var	autoprefixer = require('gulp-autoprefixer');
var	minifyCSS = require('gulp-minify-css');
var	rename = require('gulp-rename');

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

// gulp.task('css', function() {
//   return gulp.src('css/main.scss')
//    .pipe(sass())
//    .pipe(autoprefixer())
//    .pipe(minifyCSS({keepBreaks:false}))
//    .pipe(rename('main.css'))
//    .pipe(gulp.dest('_site/css/'));
// });

// gulp.task('css', function () {
//   return gulp.src('css/main.scss')
//     .pipe(sass())
//     .pipe(autoprefixer())
//     .pipe(rename('main.css'))
//     .pipe(gulp.dest('_site/css/'));
// });

gulp.task('css', function () {
  return gulp.src('css/main.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    // .pipe(rename('main.css'))
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

// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');
// var notify = require('gulp-notify');

// var paths = {
//   scss: 'css/main.scss',
//   css: 'public/css',
//   es6: 'public/es6/**/*',
//   js: 'public/js',
//   images: 'public/img/**/*'
// };

// gulp.task('scss', function () {
//   return gulp.src(paths.scss)
//     .pipe(sass())
//     .pipe(autoprefixer())
//     .pipe(gulp.dest(paths.css))
//     .pipe(notify('Gulp SCSS Complete'));
// });

// gulp.task('watch', function () {
//   gulp.watch(paths.scss, ['scss']);
//   gulp.watch(paths.es6, ['es6']);
// });

// gulp.task('serve', ['watch']);
// gulp.task('build', ['scss']);

const gulp = require('gulp');
const webpack = require('webpack-stream');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
// let imagemin;

import('gulp-imagemin').then((module) => {
  imagemin = module;
});

// Задача для работы с JavaScript
gulp.task('js', function() {
    return gulp.src('src/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist'));
});

// Задача для работы с CSS
gulp.task('css', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Задача для работы с HTML
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

// Задача для работы с изображениями
gulp.task('img', function(done) {
  import('gulp-imagemin').then((imagemin) => {
      return gulp.src('src/img/*')
          .pipe(imagemin.default())
          .pipe(gulp.dest('dist/img'));
  }).then(() => done(), (err) => done(err));
});


// Задача по умолчанию
gulp.task('default', gulp.series('js', 'css', 'html', 'img', function(done) {
    gulp.watch('src/js/*.js', gulp.series('js'));
    gulp.watch('src/scss/*.scss', gulp.series('css'));
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/img/*', gulp.series('img'));
    done();
}));

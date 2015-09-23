'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');

// load plugins
var $ = require('gulp-load-plugins')();

// compile SASS to CSS
gulp.task('styles', function () {
    return gulp.src(['sass/main.scss'])
        .pipe($.sass({errLogToConsole: true}))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('./'))
        .pipe($.size())
        .pipe($.notify("Compilation complete."));
});

gulp.task('clean', function () {
    return gulp.src(['./main.css', 'dist'], { read: false }).pipe($.clean());
});

// run to build and quit
gulp.task('build', ['clean', 'styles']);

// by default gulp will build and watch
gulp.task('default', ['clean', 'build'], function () {
    gulp.watch('sass/**/*.scss', ['styles']);
});
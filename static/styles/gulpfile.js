'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
    return gulp.src(['sass/main.scss'])
        .pipe($.sass({errLogToConsole: true}))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('build'))
        .pipe($.size())
        .pipe($.notify("Compilation complete."));
});

gulp.task('clean', function () {
    return gulp.src(['css/main.css', 'dist'], { read: false }).pipe($.clean());
});

gulp.task('build', ['clean', 'styles']);

gulp.task('default', ['clean', 'build'], function () {
    // watch for changes
    gulp.watch('sass/**/*.scss', ['styles']);
});


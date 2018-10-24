'use strict';
/**
 * Копирование разного рода файлов
 */
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    $ = require('gulp-load-plugins')();

/**
 * Копирование статики в директорию сборки
 */
gulp.task('copy-external', function () {

    return gulp.src('src/external/**/*')
        .pipe(gulp.dest(gulp.destPath))
        .pipe(reload({stream: true}));

});

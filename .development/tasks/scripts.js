"use strict";
/**
 * Сборка JavaScript
 */
// инициализация gulp
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    $ = require('gulp-load-plugins')();

var src = {
    // внешние библиотеки
    vendor: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
        'bower_components/vue/dist/vue.js'
    ],
    // внутренние скрипты
    main: [
        'src/js/main.js',
        'src/js/**/*.js'
    ]
};

// сборка внешнего js
gulp.task('scripts-bower', function () {
    // Сборка плагинов
    return gulp.src(src.vendor)
        .pipe($.concat('vendor.js'))
        .pipe(gulp.dest(gulp.destPath + '/js/'));
});

// сборка внутреннего js
gulp.task('scripts', function() {
    return gulp.src(src.main)
        .pipe($.concat('main.js'))
        .pipe(gulp.dest(gulp.destPath + '/js/'))
        .pipe(reload({stream: true}));
});
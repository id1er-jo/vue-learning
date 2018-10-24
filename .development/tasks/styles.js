"use strict";
/**
 * Сборка CSS
 */
var gulp = require('gulp'),
    streamqueue = require('streamqueue'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    $ = require('gulp-load-plugins')(),
    rupture = require('rupture');

// Собираем Stylus

gulp.task('styles-bower', function () {

    return streamqueue(
        {objectMode: true},
        gulp.src('bower_components/magnific-popup/dist/magnific-popup.css'),
    )
        .pipe($.newer(gulp.destPath + '/css/vendor.css'))
        .pipe($.concat('vendor.css'))
        .pipe($.autoprefixer(['last 2 versions', 'Explorer > 8']))
        .pipe(gulp.dest(gulp.destPath + '/css/'));
});

gulp.task('styles', function () {

    return gulp.src('src/stylus/main.styl')
        .pipe($.plumber())
        .pipe($.stylus({
            paths: [
                'bower_components'
            ],
            use: [
                rupture()
            ]
        }))
        .pipe($.autoprefixer(['last 2 versions', 'Explorer > 8']))
        .pipe(gulp.dest(gulp.destPath + '/css/'))
        .pipe(reload({stream:true}));
});
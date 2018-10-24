"use strict";
/**
 * Отслеживание изменений проекта
 */
var gulp = require('gulp');

gulp.task('watch', function() {
	//gulp.watch(['src/sprite/*.png'], {debounceDelay: 2000}, ['sprite-normal']);

	gulp.watch('src/stylus/**/*.styl', ['styles']);

	gulp.watch('src/js/**/*.js', ['scripts']);
	
	gulp.watch('src/templates/**/*', ['templates']);
	gulp.watch('src/external/**/*', ['copy-external']);
});

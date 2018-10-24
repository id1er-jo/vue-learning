'use strict';

var gulp = require('gulp-param')(require('gulp'), process.argv),
	requireDir = require('require-dir'),
	sequence = require('run-sequence');

gulp.destPath = '../public/';

requireDir('./tasks', { recurse: true });

var buildCommands = [
    ['sprite-normal'],
	['styles', 'styles-bower', 'scripts', 'scripts-bower', 'copy-external']
];

gulp.task('build', function() {
	return sequence.apply(this, buildCommands);
});

gulp.task('default', function () {
	return sequence.apply(this, buildCommands.concat([
		'watch'
	]));
});

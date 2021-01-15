var gulp = require('gulp');
var copy = require('copy');


gulp.task('build', gulp.series(copy, 'styles', 'js'));



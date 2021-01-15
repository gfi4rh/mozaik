var gulp = require('gulp');


gulp.task('build', gulp.series('copy', 'styles', 'js'));


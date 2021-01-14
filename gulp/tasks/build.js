var gulp = require('gulp');

gulp.task('build', gulp.parallel('copy', 'styles', 'js'));

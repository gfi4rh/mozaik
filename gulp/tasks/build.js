var gulp = require('gulp');
require('./copy')
require('./styles')
require('./js')

gulp.task('build', gulp.series('copy', 'styles', 'js'));



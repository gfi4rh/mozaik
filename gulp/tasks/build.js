var gulp = require('gulp');
require('./copy')
require('./style')
require('./js')

gulp.task('build', gulp.parallel('copy', 'styles', 'js'));



var gulp = require('gulp');
import copy from 'copy'


gulp.task('build', gulp.series(copy, 'styles', 'js'));



var gulp = require('gulp');


//gulp.task('build', gulp.series('copy', 'styles', 'js'));

gulp.task('build', () => {
  console.log('Building')
  return Promise.resolve('build')
})



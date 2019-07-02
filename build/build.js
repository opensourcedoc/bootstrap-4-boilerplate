const gulp = require('gulp')

/* HTML Tasks */
gulp.task('html:build', require('./tasks/html/build'))
gulp.task('html:clean', require('./tasks/html/clean'))

/* Domain Tasks */
gulp.task('html', gulp.series('html:clean', 'html:build'))

gulp.task('default', gulp.parallel('html'))

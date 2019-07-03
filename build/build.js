const gulp = require('gulp');
const message = require('./lib/message');

const browserSync = require('browser-sync').create();

/* HTML Tasks */
gulp.task('html:build', require('./tasks/html/build'));
gulp.task('html:clean', require('./tasks/html/clean'));

/* Domain Tasks */
gulp.task('html', gulp.series('html:clean', 'html:build'));

function reload (done) {
  browserSync.reload();
  done();
}

gulp.task('watch', function () {
  browserSync.init({
    open: false,
    server: { baseDir: '../public' }
  });

  gulp.watch('../src/**/*.html', gulp.series('html', reload))
    .on('error', message.error('WATCH: Views'));
});

gulp.task('default', gulp.parallel('html'));

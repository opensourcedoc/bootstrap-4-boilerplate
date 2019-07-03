const gulp = require('gulp');
const message = require('./lib/message');

const browserSync = require('browser-sync').create();

/* HTML Tasks */
gulp.task('html:build', require('./tasks/html/build'));
gulp.task('html:clean', require('./tasks/html/clean'));

/* SASS Tasks */
gulp.task('sass:build', require('./tasks/sass/build'));
gulp.task('sass:clean', require('./tasks/sass/clean'));
gulp.task('sass:lint', require('./tasks/sass/lint'));

/* Domain Tasks */
gulp.task('html', gulp.series('html:clean', 'html:build'));
gulp.task('sass', gulp.series('sass:clean', 'sass:lint', 'sass:build'));

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

  gulp.watch('../asset/sass/**/*.scss', gulp.series('sass', reload))
    .on('error', message.error('WATCH: Sass'));
});

gulp.task('default', gulp.parallel('html', 'sass'));

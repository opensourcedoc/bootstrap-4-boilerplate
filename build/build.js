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

/* JavaScript Tasks */
gulp.task('javascript:build', require('./tasks/javascript/build'));
gulp.task('javascript:clean', require('./tasks/javascript/clean'));
gulp.task('javascript:lint', require('./tasks/javascript/lint'));

/* Font Tasks */
gulp.task('font:build', require('./tasks/font/build'));
gulp.task('font:clean', require('./tasks/font/clean'));

/* Image Tasks */
gulp.task('image:build', require('./tasks/image/build'));
gulp.task('image:clean', require('./tasks/image/clean'));

/* Domain Tasks */
gulp.task('html', gulp.series('html:clean', 'html:build'));
gulp.task('sass', gulp.series('sass:clean', 'sass:lint', 'sass:build'));
gulp.task('javascript', gulp.series('javascript:clean', 'javascript:lint', 'javascript:build'));
gulp.task('font', gulp.series('font:clean', 'font:build'));
gulp.task('image', gulp.series('image:clean', 'image:build'));

function reload (done) {
  browserSync.reload();
  done();
}

gulp.task('watch', function () {
  browserSync.init({
    open: false,
    server: {
      baseDir: '../public',
      index: 'index.html'
    }
  });

  gulp.watch('../src/**/*.html', gulp.series('html', reload))
    .on('error', message.error('WATCH: Views'));

  gulp.watch('../assets/sass/**/*.scss', gulp.series('sass', reload))
    .on('error', message.error('WATCH: Sass'));

  gulp.watch('../assets/js/**/*.js', gulp.series('javascript', reload))
    .on('error', message.error('WATCH: JavaScript'));

  gulp.watch('../assets/font/**/*', gulp.series('font', reload))
    .on('error', message.error('WATCH: Font'));

  gulp.watch('../assets/img/**/*.{jpg,jpeg,png,gif,svg}', gulp.series('image', reload))
    .on('error', message.error('WATCH: Image'));
});

gulp.task('default', gulp.parallel('html', 'sass', 'javascript', 'font', 'image'));

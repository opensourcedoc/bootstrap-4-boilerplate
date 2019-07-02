const gulp = require('gulp')
const nunjucks = require('gulp-nunjucks-render')

module.exports = function () {
    return gulp.src('../src/*.html')
        .pipe(nunjucks({
            path: ['../src']
        }))
        .on('error', function (err) {
            if (err) {
              console.error('error', err.message)
      
              process.exit(1)
            }
        })
        .pipe(gulp.dest('../public'))
};

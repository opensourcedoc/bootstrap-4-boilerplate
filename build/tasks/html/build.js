const isdev = require('isdev');

const gulp = require('gulp');
const gulpif = require('gulp-if');

const nunjucks = require('gulp-nunjucks-render');
const htmlmin = require('gulp-htmlmin');

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
        .pipe(gulpif(!isdev, htmlmin({ collapseWhitespace: true })))
        .pipe(gulp.dest('../public'));
};

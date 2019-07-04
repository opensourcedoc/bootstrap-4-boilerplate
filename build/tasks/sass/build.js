const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const prefix = require('gulp-autoprefixer');

const message = require('../../lib/message');

module.exports = function () {
    return gulp.src('../assets/sass/**/*.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .on('error', message.error('SASS: Compilation'))
        .pipe(prefix({
            cascade: false
        }))
        .pipe(gulp.dest('../public/css'));
};

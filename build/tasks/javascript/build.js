const gulp = require('gulp');
const babel = require('gulp-babel');

const message = require('../../lib/message');

module.exports = function () {
    return gulp.src('../assets/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .on('error', message.error('JAVASCRIPT: Building'))
        .pipe(gulp.dest('../public/js'));
};

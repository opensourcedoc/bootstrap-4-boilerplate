const fs = require('fs');
const path = require('path');

const isdev = require('isdev');

const gulp = require('gulp');
const data = require('gulp-data');
const gulpif = require('gulp-if');

const nunjucks = require('gulp-nunjucks-render');
const htmlmin = require('gulp-htmlmin');

const json = require('../../lib/json');

module.exports = function () {
    return gulp.src('../src/**/*.html')
        .pipe(data(json('../data/json/')))
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

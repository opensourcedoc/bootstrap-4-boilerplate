const fs = require('fs');
const path = require('path');

const isdev = require('isdev');
const rename = require("gulp-rename");

const gulp = require('gulp');
const data = require('gulp-data');
const gulpif = require('gulp-if');

const nunjucks = require("nunjucks");
const markdown = require("nunjucks-markdown");
const marked = require("marked");
const gulpnunjucks = require('gulp-nunjucks');
const htmlmin = require('gulp-htmlmin');

const json = require('../../lib/json');

let env = new nunjucks.Environment(new nunjucks.FileSystemLoader("../src"));

markdown.register(env, marked);

module.exports = function () {
    return gulp.src('../src/**/*.md')
        .pipe(data(json('../data/json/')))
        .pipe(gulpnunjucks.compile("", {
            env: env
        }))
        .on('error', function (err) {
            if (err) {
              console.error('error', err.message)
      
              process.exit(1)
            }
        })
        .pipe(rename(function (path) { path.extname=".html" }))
        .pipe(gulpif(!isdev, htmlmin({ collapseWhitespace: true })))
        .pipe(gulp.dest('../public'));
};

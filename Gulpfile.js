var gulp      = require('gulp');
var plumber   = require('gulp-plumber');
var sass      = require('gulp-sass');
var webserver = require('gulp-webserver');
var opn       = require('opn');

var sourcePaths = {
  styles: ['scss/**/*.scss']
};

var distPaths = {
  styles: 'css'
};

var server = {
  host: 'localhost',
  port: '3000'
}

gulp.task('sass', function () {
  gulp.src( sourcePaths.styles )
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest( distPaths.styles ));
});

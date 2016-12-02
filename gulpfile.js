var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var browserSync = require('browser-sync');
var inky = require('inky');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var concatCss = require('gulp-concat-css');

gulp.task('browser-sync', function() {
    browserSync({
	server: {
	    baseDir: "./"
	}
    });
    gulp.watch("*.html", ['bs-reload']);
    gulp.watch("./assets/*/*", ['bs-reload']);
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['browser-sync'], function(){
    gulp.watch("src/styles/**/*.scss", ['styles']);
    gulp.watch("*.html", ['bs-reload']);
});

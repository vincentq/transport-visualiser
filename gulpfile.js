// grab our gulp packages
var gulp  = require('gulp'),
    del   = require('del'),
    log   = require('fancy-log'),
    jshint = require('gulp-jshint'),
    htmlmin = require('gulp-htmlmin');

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    log("Inside watch")
  gulp.watch('src/js/**/*.js', gulp.series('jshint'));
});

// Default task stub
gulp.task('default', function(cb) {
    cb();
});


gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
  return gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('clean', function() {
    return del(['dist/**/*']);
});


gulp.task('build', gulp.series('clean','css','html'));
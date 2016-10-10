/* Dependencias*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  sass = require('gulp-sass'),
  minifyCss = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer');


gulp.task('javascript', function () {
  gulp.src('js/*.js')
  .pipe(concat('todo.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/'));
});

gulp.task('estilos', function () {
  gulp.src('sass/*.scss')
  .pipe(concat('style.css'))
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCss())
  .pipe(gulp.dest('build/'));
});

gulp.task('default', ['javascript', 'estilos', 'watch']);

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['javascript']);
  gulp.watch('sass/*.scss', ['estilos']);
});

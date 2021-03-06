var gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  babel = require('gulp-babel'),
  eslint = require('gulp-eslint'),
  Cache = require('gulp-file-cache');

var cache = new Cache();

gulp.task('js', function () {
  return gulp.src('./src/**/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(cache.filter())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['es2015', 'stage-0'],
      plugins: ['transform-runtime']
    }))
    .pipe(cache.cache())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./.dist'));
});

gulp.task('develop', ['js'], function () {
  nodemon({
    script: '.dist/app.js',
    watch: ['.'],
    ext: 'js yaml',
    ignore: ['node_modules/', 'ui/', '.uibuild/', '.dist/'],
    tasks: ['js'],
  });
});

gulp.task('default', ['develop']);

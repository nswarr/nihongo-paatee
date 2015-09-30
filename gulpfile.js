var gulp = require("gulp");
var webpack = require("webpack-stream");
var named = require('vinyl-named');
var gls = require('gulp-live-server');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', ['build']);
gulp.task("build", ['build-app', 'styles', 'vendor']);

gulp.task("build-app", function() {
  return gulp.src('app/routes.jsx')
    .pipe(named())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('styles', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('public/css/'));
});

gulp.task("vendor", ['concat-vendor-js']);

gulp.task("concat-vendor-js", function() {
  return gulp.src([
      'vendor/jquery-1.11.3.min.js',
      'vendor/bootstrap-custom/js/bootstrap.js',
      'vendor/bootstrap-datepicker/bootstrap-datepicker.js',
      'vendor/typeahead.bundle.js',
      'vendor/parsley.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function(){
  watch(['app/**/*.js*'], run('build-app'));
  watch(['app/sass/**/*.scss'], run('styles'));
  watch(['vendor/**/*.*'], run('vendor'));
});

gulp.task('server', ['build', 'watch'], function () {
  var server = gls('server.js', {env: process.env});
  server.start();

  watch(['public/**/*.*', 'lib/**/*.js', 'server.js'], function(event){
    server.notify.call(server, event);
  });

  watch(['server.js', 'lib/**/*.js', envVarsPath], function() {
    server.start.apply(server);
  });
});

function run(taskName) {
  return function(event) {
    gulp.start(taskName);
  };
}

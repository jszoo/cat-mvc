var gulp = require('gulp');
    browserify = require('gulp-browserify'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    ngmin = require('gulp-ngmin'),
    lr = require('tiny-lr'),
    server = lr();


// js
gulp.task('js', function(){
  gulp
    .src('app/js/main.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : true
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./app/js'))
    .pipe(livereload(server));
});

// js min
gulp.task('js-min', function () {
  gulp
    .src('app/js/main.js')
    .pipe(plumber({
      errorHandler: notify.onError("js error: <%= error.message %>")
    }))
    .pipe(browserify({
      insertGlobals : false,
      debug : false
    }))
    .pipe(concat('bundle.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(ngmin())
    // .pipe(uglify())
    .pipe(gulp.dest('./app/js'));
});

// css
gulp.task('css', function () {
  gulp
    .src('app/css/main.less')
    .pipe(plumber({
      errorHandler: notify.onError("css error: <%= error.message %>")
    }))
    .pipe(less({
      sourceMap: false
    }))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./app/css'))
    .pipe(livereload(server));
});

// css min
gulp.task('css-min', function () {
  gulp
    .src('app/css/main.less')
    .pipe(less({
      sourceMap: false
    }))
    .pipe(concat('bundle.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('./app/css'));
});


// publish
gulp.task('publish', ['js', 'js-min', 'css', 'css-min'], function () {
  //console.log('publish done')
});


// clean
gulp.task('clean', function() {
  gulp.src(['./app/js/bundle.js',
            './app/js/bundle.min.js',
            './app/css/bundle.css',
            './app/css/bundle.min.css'], {read: false})
    .pipe(clean());
});


// watch
gulp.task('watch', function () {
  var paths = {
    js: ['app/js/*/*.js'], //js: ['app/js/**/*.js'],
    css: ['app/css/**/*.less'] //css: ['app/css/**/*.less', 'app/css/**/*.css']
  };
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err);
    }
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.css, ['css']);
  });
});


// default task
gulp.task('default', ['watch']);

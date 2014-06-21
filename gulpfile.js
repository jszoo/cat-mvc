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
    .src('cms/js/main.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : true
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./cms/js'))
    .pipe(livereload(server));
});

// js min
gulp.task('js-min', function () {
  gulp
    .src('cms/js/main.js')
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
    .pipe(gulp.dest('./cms/js'));
});

// css
gulp.task('css', function () {
  gulp
    .src('cms/css/main.less')
    .pipe(plumber({
      errorHandler: notify.onError("css error: <%= error.message %>")
    }))
    .pipe(less({
      sourceMap: false
    }))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./cms/css'))
    .pipe(livereload(server));
});

// css min
gulp.task('css-min', function () {
  gulp
    .src('cms/css/main.less')
    .pipe(less({
      sourceMap: false
    }))
    .pipe(concat('bundle.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('./cms/css'));
});


// publish
gulp.task('publish', ['js', 'js-min', 'css', 'css-min'], function () {
  //console.log('publish done')
});


// clean
gulp.task('clean', function() {
  gulp.src(['./cms/js/bundle.js',
            './cms/js/bundle.min.js',
            './cms/css/bundle.css',
            './cms/css/bundle.min.css'], {read: false})
    .pipe(clean());
});


// watch
gulp.task('watch', function () {
  var paths = {
    js: ['cms/js/*/*.js'], //js: ['cms/js/**/*.js'],
    css: ['cms/css/**/*.less'] //css: ['cms/css/**/*.less', 'cms/css/**/*.css']
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

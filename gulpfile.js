'use strict';

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  del: require('del'),
  mqpacker: require('css-mqpacker'),
  autoprefixer: require('autoprefixer'),
  bs: require('browser-sync').create(),
  uglify: require('gulp-uglify-es').default,
  path: {
    tasks: require('./assets/gulp/paths/tasks.js'),
    jsVendors: require('./assets/gulp/paths/js.vendors.js'),
    cssVendors: require('./assets/gulp/paths/css.vendors.js')
  },
  config: require('./assets/gulp/config')
};

$.path.tasks.forEach(function (e) {
  require(e)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'pug',
    'sass',
    // 'cssVendors',
    'scripts',
    'jsVendors',
    'copyFonts',
    'copyImages'
    // 'svgSprite'
  ),
  $.gulp.parallel(
    'watch',
    'bs'
  )
));

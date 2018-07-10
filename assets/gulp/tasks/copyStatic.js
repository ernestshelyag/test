'use strict';

module.exports = function () {
  $.gulp.task('copyFonts', function () {
    return $.gulp.src($.config.static + 'fonts/**')
      .pipe($.gulp.dest($.config.root + 'fonts/'));
  });
  // - - - - -
  $.gulp.task('copyImages', function () {
    return $.gulp.src($.config.static + 'img/**')
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + 'img/'));
  });
  // - - - - -
  $.gulp.task('cleanStatics', function () {
    return $.del($.config.root + 'img/**');
  });
};

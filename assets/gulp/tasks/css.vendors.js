'use strict';

module.exports = function () {
  $.gulp.task('cssVendors', function () {
    return $.gulp.src($.path.cssVendors)
      .pipe($.gp.concatCss('vendors.min.css'))
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + 'css/'));
  });
};

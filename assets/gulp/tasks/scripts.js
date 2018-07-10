'use strict';

module.exports = function () {
  $.gulp.task('scripts', function () {
    return $.gulp.src($.config.src + '**/*.js')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function (err) {
          return {
            title: 'JS',
            message: err.message
          };
        })
      }))
      .pipe($.gp.concat('main.min.js'))
      .pipe($.uglify())
      .pipe($.gulp.dest($.config.root + 'js/'));
  });
};

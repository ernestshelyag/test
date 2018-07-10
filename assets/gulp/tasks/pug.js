'use strict';

module.exports = function () {
  $.gulp.task('pug', function () {
    return $.gulp.src($.config.pug + 'pages/*.pug')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function (err) {
          return {
            title: 'PUG',
            message: err.message
          };
        })
      }))
      .pipe($.gp.pug({pretty: true}))
      .pipe($.gulp.dest($.config.root));
  });
};

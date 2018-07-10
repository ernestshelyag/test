'use strict';

module.exports = function () {
  $.gulp.task('bs', function () {
    $.bs.init({
      port: 3000,
      server: $.config.root
    });
    $.bs.watch($.config.root + '**/*.*').on('change', $.bs.reload);
  });
};

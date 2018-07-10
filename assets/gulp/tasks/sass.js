'use strict';

module.exports = function () {
  let processors = [
    $.autoprefixer({
      browsers: $.config.autoprefixerConfig,
      cascade: false
    }),
    $.mqpacker({
      sort: sortMediaQueries
    })
  ];
  function isMax (mq) {
    return /max-width/.test(mq);
  }
  function isMin (mq) {
    return /min-width/.test(mq);
  }
  function sortMediaQueries (a, b) {
    let A = a.replace(/\D/g, '');
    let B = b.replace(/\D/g, '');
    if (isMax(a) && isMax(b)) {
      return B - A;
    } else if (isMin(a) && isMin(b)) {
      return A - B;
    } else if (isMax(a) && isMin(b)) {
      return 1;
    } else if (isMin(a) && isMax(b)) {
      return -1;
    }
    return 1;
  }
  $.gulp.task('sass', function () {
    return $.gulp.src($.config.sass + 'app.sass')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function (err) {
          return {
            title: 'SASS',
            message: err.message
          };
        })
      }))
      .pipe($.gp.sass())
      .pipe($.gp.postcss(processors))
      .pipe($.gp.csso())
      .pipe($.gp.rename({ suffix: '.min' }))
      .pipe($.gulp.dest($.config.root + 'css/'));
  });
};

var gulp = require('gulp')
var iconfont = require('gulp-iconfont')
var iconfontCss = require('gulp-iconfont-css')
var runTimestamp = Math.round(Date.now() / 1000)

gulp.task('iconfont', function() {
  gulp
    .src(['app/images/icons/*.svg'])
    .pipe(
      iconfontCss({
        fontName: 'apicons',
        targetPath: './icons.scss',
        fontPath: './'
      })
    )
    .pipe(
      iconfont({
        fontName: 'apicons',
        normalize: true,
        fontHeight: 1001,
        formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
        timestamp: runTimestamp
      })
    )
    .pipe(gulp.dest('app/fonts/icons'))
})

var gulp = require('gulp');

// SVG optimization task
gulp.task('fonts', function () {
  return gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('hugo/static/fonts'));
});
var gulp = require('gulp');

// SVG optimization task
gulp.task('domain', function () {
  return gulp.src('src/CNAME')
    .pipe(gulp.dest('hugo/static'));
});
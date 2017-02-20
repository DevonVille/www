var gulp = require("gulp");
var ghPages = require('gulp-gh-pages');

gulp.task('publish', ['build:publish'], function() {
  return gulp.src('./public/**/*')
    .pipe(ghPages());
});
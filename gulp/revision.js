var gulp = require('gulp');
var rev = require('gulp-rev');
var del = require('rev-del');
var path = require('path');

gulp.task('revision', ['styles','scripts', 'images', 'svg'], function() {
    return gulp.src(['.cache/staging/css/**/*.css', '.cache/staging/js/**/*.js', '.cache/staging/img/**/*.*', '.cache/staging/svg/**/*.svg', '.cache/staging/fonts/**/*.css'], {base: path.join(process.cwd(), '.cache/staging')})
        .pipe(rev())
        .pipe(gulp.dest('hugo/static'))
        .pipe(rev.manifest())
        .pipe(del({dest: 'hugo/static'}))
        .pipe(gulp.dest('hugo/static'));
});
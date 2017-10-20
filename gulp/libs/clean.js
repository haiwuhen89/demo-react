/*
 * @auth gengmm
 */

import gulp from 'gulp';
import clean from 'gulp-clean';

gulp.task('clean:dev', () => {
    return gulp.src('./build', {read: false})
        .pipe(clean());
});
gulp.task('clean:sit', () => {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

/*
 * @auth gengmm
 */

import gulp from 'gulp';
import filter from "gulp-filter";

// import util from '../util';


gulp.task('img:dev', function () {
    return gulp.src([
        './src/page/**/images/*',
        './src/components/**/images/*',
    ])
        // .pipe(util.removeDirname())
        .pipe(filter(function (f) {
            return f.stat && f.stat.size >= 9000
        }))
        .pipe(gulp.dest('./build/images'));
});

gulp.task('img:sit', function () {
    return gulp.src([
        './src/page/**/images/*',
        './src/components/**/images/*',
    ])
        // .pipe(util.removeDirname())
        .pipe(filter(function (f) {
            return f.stat && f.stat.size >= 9000
        }))
        .pipe(gulp.dest('./dist/images'));
});

/**
 * @file
 * @auth gengmm
*/

import gulp from 'gulp';
import sequece from 'gulp-sequence';

gulp.task('sit', sequece(
  ['clean:sit'],
  ['img:sit','html:sit', 'js:sit','scss:sit']
));
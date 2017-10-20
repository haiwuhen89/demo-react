/**
 * @file
 * @auth gengmm
*/

import gulp from 'gulp';
import sequece from 'gulp-sequence';

gulp.task('dev', sequece(
  ['clean:dev'],
  ['img:dev','html:dev', 'js:dev','scss:dev']
));
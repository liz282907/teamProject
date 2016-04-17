var gulp = require('gulp');
var rev = require('gulp-rev'); 
var config = require('../config');

gulp.task('md5', function(){
    return gulp.src([("!" + config.lib.path),config.js.path])
        .pipe(rev())
        .pipe(gulp.dest(config.js.dest))
        .pipe(rev.manifest())
        .pipe(gulp.dest('webapp/rev_config/rev-js.json'));
})







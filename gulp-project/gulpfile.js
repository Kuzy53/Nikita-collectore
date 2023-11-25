const gulp = require('gulp')
const fs = require('fs');
const clean = require('gulp-clean');


gulp.task("task1", function () {
    console.log("tASK IS DONE")
})

gulp.task("watch:dev", function () {
    gulp.watch("./src/*.js", gulp.parallel("task1"))
})

gulp.task('clean:dev', function (done) {
    if (fs.existsSync('./dist/')) {
      return gulp
        .src('./dist/', { read: false })
        .pipe(clean({ force: true }));
    }
    done();
  });

gulp.task("default", 
gulp.series('clean:dev', gulp.parallel('task1'), gulp.parallel('watch:dev'))
)
  

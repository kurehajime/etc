var gulp = require('gulp');
var fs = require('fs');
var inlinesource = require('gulp-inline-source');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var date=require('date-utils');


gulp.task('colamone', function() {
    var dt = new Date();
    var formatted = dt.toFormat("YYYYMMDDHH24MI");
    //index.html作成
    fs.createReadStream('../colamone_js/colamone.html')        
        .pipe(fs.createWriteStream('../colamone_js/index.html'));
    gulp.src( '../colamone_js/index.html'  )
        .pipe(replace(/TIMESTAMP/g, formatted))
        .pipe( gulp.dest( '../colamone_js') )

    
    //公開フォルダへコピー
    gulp.src( '../colamone_js/*.html'  )
        .pipe(inlinesource())
        .pipe(replace(/TIMESTAMP/g, formatted))
        .pipe( gulp.dest( '../xiidec/static/colamone') )
        .pipe( gulp.dest( '../xiidec/static/colamone_beta') );
    gulp.src( '../colamone_js/*.js'  )
        .pipe(uglify())
        .pipe( gulp.dest( '../xiidec/static/colamone') )
        .pipe( gulp.dest( '../xiidec/static/colamone_beta') );
    gulp.src( '../colamone_js/*.css'  )
        .pipe( gulp.dest( '../xiidec/static/colamone') )
        .pipe( gulp.dest( '../xiidec/static/colamone_beta') );
    gulp.src( '../colamone_js/*.gif'  )
        .pipe( gulp.dest( '../xiidec/static/colamone') )
        .pipe( gulp.dest( '../xiidec/static/colamone_beta') );
    
});
gulp.task('watch', function() {
  gulp.watch('../colamone_js/*', ['colamone']);
});

gulp.task('default', ['colamone']);
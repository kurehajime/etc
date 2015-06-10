var gulp = require('gulp');
var fs = require('fs');
gulp.task('colamone', function() {
    
    //index.html作成
    fs.createReadStream('../colamone_js/colamone.html').pipe(fs.createWriteStream('../colamone_js/index.html'));
    
    //公開フォルダへコピー
    gulp.src( '../colamone_js/*.html'  )
        .pipe( gulp.dest( '../xiidec/static/colamone') )
        .pipe( gulp.dest( '../xiidec/static/colamone_beta') );
    gulp.src( '../colamone_js/*.js'  )
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
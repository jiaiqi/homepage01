const gulp = require('gulp'),
	sass = require('gulp-sass');
	/*编译sass文件*/
gulp.task('build-sass',async()=>{
		gulp.src('./static/sass/*.scss')//读取开发目录的scss文件
		.pipe(sass({outputStyle: 'expanded'})) //展开输出方式	
		.pipe(gulp.dest('./static/css')) //输出到开发目录  
});
gulp.task('sass',async()=>{
	gulp.watch('./static/sass/*.scss',gulp.series('build-sass'));
});
const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

gulp.task('server', function() {

	browserSync({
		server: {
			baseDir: "dist"
		}
	});

	gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task('styles', function() {
	return gulp.src("src/sass/**/*.+(scss|sass)")
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename({suffix: '.min', prefix: ''}))
		.pipe(autoprefixer())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest("dist/css"))
		.pipe(browserSync.stream());
});

gulp.task('watch', function () {
	gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));
	gulp.watch("src/*.html").on('change', gulp.parallel('html'));
});

gulp.tasc('html', function(){
	return gulp.src("src/*.html")
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe.(gulp.dest("dist/"));
});
gulp.tasc('scripts', function(){
	return gulp.src("src/js/**/*.js")
		.pipe(gulp.dest("dist/js"));
});
gulp.tasc('fonts', function(){
	return gulp.src("src/js/**/*")
		.pipe(gulp.dest("dist/fonts"));
});
gulp.tasc('icons', function(){
	return gulp.src("src/js/**/*")
		.pipe(gulp.dest("dist/icons"));
});
gulp.tasc('mailer', function(){
	return gulp.src("src/js/**/*")
		.pipe(gulp.dest("dist/mailer"));
});
gulp.tasc('images', function(){
	return gulp.src("src/js/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest("dist/img"));
});
gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'mailer', 'html', 'images'));
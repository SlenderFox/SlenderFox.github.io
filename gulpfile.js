import { task, series, src, dest, watch } from 'gulp';
import csso from 'gulp-csso';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import { spawn } from 'child_process';
import imagemin from 'gulp-imagemin';
import browserSync, { reload } from 'browser-sync';

var jekyllCommand = (/^win/.test(process.platform)) ? 'jekyll.bat' : 'jekyll';

/*
 * Build the Jekyll Site
 * runs a child process in node that runs the jekyll commands
 */
task('jekyll-build', function (done) {
	return spawn(jekyllCommand, ['build'], {stdio: 'inherit'})
		.on('close', done);
});

/*
 * Rebuild Jekyll & reload browserSync
 */
task('jekyll-rebuild', series(['jekyll-build'], function (done) {
	reload();
	done();
}));

/*
 * Build the jekyll site and launch browser-sync
 */
task('browser-sync', series(['jekyll-build'], function(done) {
	browserSync({
		server: {
			baseDir: '_site'
		}
	});
	done()
}));

/*
* Compile and minify sass
*/
task('sass', function() {
  return src('src/styles/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(csso())
		.pipe(dest('assets/css/'))
});

/*
* Compile fonts
*/
task('fonts', function() {
	return src('src/fonts/**/*.{ttf,woff,woff2}')
		.pipe(plumber())
		.pipe(dest('assets/fonts/'))
});

/*
 * Minify images
 */
task('imagemin', function() {
	return src('src/img/**/*.{jpg,png,gif}')
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
		.pipe(dest('assets/img/'))
});

/**
 * Compile and minify js
 */
task('js', function() {
	return src('src/js/**/*.js')
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(dest('assets/js/'))
});

task('watch', function() {
  watch('src/styles/**/*.scss', series(['sass', 'jekyll-rebuild']));
  watch('src/js/**/*.js', series(['js', 'jekyll-rebuild']));
  watch('src/fonts/**/*.{tff,woff,woff2}', series(['fonts']));
  watch('src/img/**/*.{jpg,png,gif}', series(['imagemin']));
  watch(['*html', '_includes/*html', '_layouts/*.html'], series(['jekyll-rebuild']));
});

task('default', series(['js', 'sass', 'fonts', 'browser-sync', 'watch']));

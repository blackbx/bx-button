const gulp                 = require('gulp');
const sourcemaps           = require('gulp-sourcemaps');
const sass                 = require('gulp-sass');
const postcss              = require('gulp-postcss');
const autoprefixer         = require('autoprefixer');
const concatCss            = require('gulp-concat-css');
const angularTemplatecache = require('gulp-angular-templatecache');
const del                  = require('del');

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('html', html);
gulp.task('clean', clean);
gulp.task('default', ['clean', 'styles', 'scripts', 'html']);

function styles() {
    return gulp
        .src('src/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write())
        .pipe(concatCss('button.css'))
        .pipe(gulp.dest('dist'));
}

function html() {
    return gulp
        .src('src/*.html')
        .pipe(angularTemplatecache('html.js', {
            module: 'bx.button'
        }))
        .pipe(gulp.dest('dist'));
}

function scripts() {
    return gulp
        .src('src/*.js')
        .pipe(gulp.dest('dist'));
}

function clean() {
    return del(['dist']);
}


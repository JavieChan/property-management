var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
//var coffeeify = require('gulp-coffeeify');
var less = require('gulp-less');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var cached = require('gulp-cached');
var merge = require('merge-stream');
//var copy = require('gulp-contrib-copy');

// 合并less文件
// gulp.task('merge-less', function(cb) {
//     var components = gulp.src([
//         './src/components/header/style.less',
//     ])
//     .pipe(concat('components.less'))
//     .pipe(gulp.dest('./resources/assets/components/client/mobile'));

//     var adminComponents = gulp.src([
//         './resources/assets/components/admin/header/style.less',
//         './resources/assets/components/admin/left-nav/style.less',
//     ])
//     .pipe(concat('components.less'))
//     .pipe(gulp.dest('./resources/assets/components/admin'));

//     return merge([mobileComponents, adminComponents]);
// });

//编译less
gulp.task('less', function(cb){
    var common =  gulp.src([
        './src/common/**/**.less',
    ])
    // .pipe(cached('lesscache'))
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(less())
    .pipe(gulp.dest('./dist/css/common'));

    var pages =  gulp.src([
        './src/pages/**/**.less',
    ])
    // .pipe(cached('lesscache'))
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(less())
    .pipe(gulp.dest('./dist/css/pages'));

    return merge([common, pages]);
});

//压缩css文件
gulp.task('minifycss', ['less'], function(cb){
    var cssCommonMinifycss =
        gulp.src('./dist/css/common/**.css')
            .pipe(minifycss())
            .pipe(gulp.dest('./dist/css/common/'));

    var cssPageMinifycss =
        gulp.src('./dist/css/pages/**/**.css')
            .pipe(minifycss())
            .pipe(gulp.dest('./dist/css/pages/'));
    return merge([cssCommonMinifycss, cssPageMinifycss]);
});

gulp.task('clean', function(cb) {
    return gulp.src([
        './dist/css',
    ]).pipe(clean());
});

gulp.task('watch', function(){
    gulp.watch([
        './src/**/**.less'
    ], ['less']);
});

gulp.task('default', ['clean'], function(){
    gulp.start('less', 'watch');
});

gulp.task('prod', ['clean'], function(){
    gulp.start('less', 'minifycss');
});




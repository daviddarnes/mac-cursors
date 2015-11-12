var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var inject = require('gulp-inject');

gulp.task('svgstore', function () {
    var svgs = gulp
        .src('svg/*.svg')
        //.pipe(svgmin())
        .pipe(svgstore({ inlineSvg: true }));

    function fileContents (filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src('template/index.html')
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest('./'));
});

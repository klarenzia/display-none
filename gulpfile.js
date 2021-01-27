var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var minifycss = require("gulp-minify-css");
var concat = require("gulp-concat");
var plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");

/* Scripts task */
gulp.task("scripts", function () {
  return gulp
    .src([
      /* Add your JS files here, they will be combined in this order */
      "js/vendor/jquery.min.js",
      "js/vendor/jquery.easing.1.3.js",
      "js/vendor/bootstrap.min.js",
      "js/vendor/jquery.poptrox.min.js",
    ])
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("js"));
});

gulp.task("minify-main", function () {
  return gulp
    .src([
      /* Add your JS files here, they will be combined in this order */
      "js/main.js",
    ])
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify())
    .pipe(gulp.dest("js"));
});

/* Sass task */
gulp.task("sass", function (done) {
  gulp
    .src("scss/style.scss")
    .pipe(plumber())
    .pipe(
      sass({
        errLogToConsole: true,
        outputStyle: "expanded",
        precision: 10,
      })
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(rename({ suffix: ".min" }))
    .pipe(minifycss())
    .pipe(gulp.dest("css"));

  done();
});

gulp.task("merge-styles", function () {
  return (
    gulp
      .src([
        "css/vendor/bootstrap.min.css",
        "css/vendor/animate.css",
        "css/vendor/icomoon.css",
        "css/vendor/owl.carousel.min.css",
        "css/vendor/owl.theme.default.min.css",
        "css/vendor/magnific-popup.css",
        "css/vendor/photoswipe.css",
        "css/vendor/default-skin.css",
        "fonts/icomoon/style.css",
      ])
      .pipe(concat("styles-merged.css"))
      .pipe(gulp.dest("css"))
      .pipe(gulp.dest("css"))
      .pipe(reload({ stream: true }))
  );
});

gulp.task('default', () => {
  gulp.watch('scss/*', gulp.series('sass'));
  gulp.watch('js/main.js', gulp.series('minify-main'));
});

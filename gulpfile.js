// あざます！→ https://qiita.com/c6tower/items/76b23e528babe4e2dd28
const gulp = require('gulp');
const sass = require('gulp-sass');

// sassの読み込み先とcssの保存先指定
const hoge = () => {
  return gulp.src('./src/assets/sass/**/*.scss')
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(gulp.dest('./src/assets/css/'));
};

// 自動監視のタスク、sassWatchって名前にする
const sassWatch = () => {
  const watcher = gulp.watch(['./src/assets/sass/**/*.scss']);
  watcher.on('change', hoge);
};

// sassWatchをデフォルトのタスクに設定
exports.build = sassWatch;
exports.default = gulp.series(sassWatch);

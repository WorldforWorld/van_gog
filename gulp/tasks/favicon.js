import favicons from "gulp-favicons";
import filter from "gulp-filter";
const config = {
  icons: {
    favicons: true, 
    appleIcon: true, 
    android: true, 
    windows: false, 
    yandex: false,
    coast: false,
    firefox: false,
    appleStartup: false
  },
  path: "img/favicon/"
};
export const favicon = () => {
  return app.gulp.src(`${app.path.src.favicon}`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "Favicon",
        message: "Error <%= error.message %>"
      }))
    )
    .pipe(app.gulp.dest(`${app.path.build.favicon}`))
    .pipe(favicons({
      appName: `Van_gog`,
      appShortName: `Van_gog`,
      appDescription: `Van_gog`,
      icons: {
        favicons: true, 
        appleIcon: true, 
        android: true, 
        windows: false, 
        yandex: false,
        coast: false,
        firefox: false,
        appleStartup: false
      },
      path: "img/favicon/"
    }))
    .pipe(app.gulp.dest(`${app.path.build.favicon}`))
    .pipe(filter(['favicon.ico', 'apple-touch-icon.png', 'manifest.json']))
    .pipe(app.gulp.dest(`${app.path.buildFolder}`));
};
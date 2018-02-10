let mix = require('laravel-mix');
mix.pug = require('laravel-mix-pug')

mix
    .js('src/js/app.js', 'dist/app.js')
    .sass('src/sass/app.sass', 'dist/app.css')
    .pug('src/pages/*.pug', 'dist', {seeds:'src/seeds'})
    .setPublicPath('dist');
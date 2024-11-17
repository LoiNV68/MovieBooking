const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .react()  // Phải thêm .react() để xử lý JSX
   .sass('resources/sass/app.scss', 'public/css');

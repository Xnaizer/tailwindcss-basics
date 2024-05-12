/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.htm'],
  theme: {
    extend: {},
  },
  plugins: [],
}

// dicontent bisa diubah untuk melihat semua isi content
// './public/**/*.{html,js}' atau  './public/index.htm'


//  npx tailwind -i ./src/css/namabebas.css -o ./public/css/keluar.css

// npm run namabebass1

// npx tailwind -o ./public/css/final.css --minify
// kode diatas digunakan kalo sudah kelar aja
// jangan lupa di index.htmnya link hrefnya diubah ke final.css
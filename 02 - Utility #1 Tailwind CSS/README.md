" Cara Instalasi TailwindCSS "
" - bikin file html "
" - npm init -y "
" - npm i tailwindcss "
" - npx tailwindcss init "
" - bikin file namabebas.css lalu masukin 3 utility wajib"
" - @tailwind base; "
" - @tailwind components; "
" - tailwind utilities; "


" - di package.json "
"   "scripts": {  "
"    "watchrunner" : "tailwindcss -i ./namabebas.css -o ./style.css --watch" "
"  }, "

" - lalu jalankan dengan " npm run watchrunner "
" - code diatas untuk menghidupkan live preview web"
" - sehingga tak perlu menggunakan / menuliskan line code yang sangat panjang "

" - lalu jangan lupa untuk menghubungkan index.htm dengan css output "
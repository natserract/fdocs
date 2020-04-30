# fDocs - Design System Modular
Code repository mengenai implementasi design system modular, dimana kita bisa sekaligus membuat suatu library local didalam satu source code dan meng-integrasikannya ke dalam sebuah dokumentasi (two way app bindings). 

## Structure
Berikut beberapa struktur direktori penting:

  1. `src/`:  library development  -> nantinya akan menghasilkan output di dalam direktori `future`
  2. `future/`: output `src/` -> integrasi packages/lib local ke dalam dokumentasi
  3. `dist/`: src -> dist: hasil final output dari library
  4. `docs/`: future -> docs: development dokumentasi

## Running
Untuk memulai project ini di local ada beberapa setup yang harus dilakukan
1. Jika MacOS, kamu punya iTerm. Kamu bisa menjalankannya dengan mudah, hanya mengetikkan perintah ini:
```sh
$ sudo chmod +x ./run.sh && ./run.sh
```
2. Jika running manual:
   ```sh
   $ npm run dev:lib-install-locally && ng serve
   ``` 
   -> untuk integrasi lib, dan menjalankan server (docs)
   
   Buat newtab baru:
   ```sh
   $ npm run dev:watch-sass
   ```
   -> rekam jejak perubahan sass/scss file
   
   Buat newtab baru lagi:
   ```sh
   $ npm run dev:watch-js
   ```
   -> rekam jejak perubahan js file
3. Buka di browser [http://localhost:4200/](http://localhost:4200/)

## Build
Build docs:
```sh
$ npm run prod:build-docs
```

Build lib:
```sh
$ npm run prod:build-lib
```
Instalasi ReactJS
  1. Install NodeJS
  2. Buka terminal pada folder ReactJS kita
  3. Pada terminal yang sudah dibuka tulis npm install (tunggu hingga proses selesai)
  
### Development

Dalam development tidak melalui proses Mengkompres dan ukuran file reactjs nya lebih besar karena dilengkapi fitur debuging.
  1. Tulis npm start (npm start itu seperti mengklik tombol start pada xampp sehingga kita bisa menjalankan project kita di browser)
  2. Buka browser dan tuliskan http://localhost:3000
  3. Edit project dalam folder src.

### Production

Tahap production adalah proses mengkompres file project kita sehingga menjadi ukuran yang lebih kecil (dicompile/di-minify).
  1. Buka terminal pada folder ReactJS kita
  2. Pada terminal yang sudah dibuka tulis npm run build. Selanjutnya tulis npm install -g serve (penulisan npm install -g serve hanya sekali. Untuk selanjutnya tidak perlu menulis ini lagi karena module serve sudah terinstall). <br/> Dan terakhir tulis serve -s build.
  3. buka browser dan tulis ip address kita dengan port 5000. Contoh http://192.168.1.10:5000

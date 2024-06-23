![SPAM  sampai 429 too many requests](https://github.com/galihap76/penipu-dana/assets/83481679/e49f80ac-78f9-49fa-b049-f162315cb435)

<hr/>

## Penipu DANA

Program yang saya buat di khususkan untuk melakukan SPAM pada penipu DANA yang mencoba memberikan web palsu seperti pada gambar di bawah ini :

![image](https://github.com/galihap76/penipu-dana/assets/83481679/c7ede056-48a6-4634-a933-a7a1530bfc63)

Anda bisa melihat pada bagian URL web di atas. DANA resmi tidak memiliki URL seperti :

```
https://file.brdu.pw/
```

Web resmi DANA adalah :

```
https://www.dana.id/
```

## API Telegram Penipu

Saya tahu web di atas palsu maka saya mencoba melakukan inspect element apakah ada script atau kode yang melakukan pengiriman data ke API telegram bot nya si penipu atau tidak : 

![Screenshot 2024-06-22 112517](https://github.com/galihap76/penipu-dana/assets/83481679/71288101-b425-40f6-895b-22b344eb7ea0)

Dan benar saja, gambar di atas terdapat API telegram bot si penipu. Skenario serangan layaknya web phising, ketika si korban terkena jebakan dan korban memasukkan PIN DANA maka PIN tersebut akan di kirimkan ke telegram bot si penipu. PIN DANA seharusnya tidak boleh di bagi tahu siapapun karena bersifat privasi.

## Download

Untuk mendownload program ini, Anda bisa lihat tombol hijau bernama **code**, klik, lalu pilih download zip :

![image](https://github.com/galihap76/penipu-dana/assets/83481679/ad7970ee-2183-4f3b-9176-8ad84ee91ec2)

Program yang saya buat terdapat dua versi yaitu versi command line (CLI) dan web (GUI) menggunakan JavaScript. Pada CLI menggunakan Python, jadi sistem komputer Anda perlu mengunduh dan menginstall dulu bahasa pemrograman Python. Anda perlu mengunduh Library tambahan pada Python yaitu :

```
pip install requests
```
Copy dan paste pada terminal Anda. Untuk penggunaan nya seperti ini :

```
python main.py -t <token telegram si penipu> -c <chat id si penipu>
```

```
python main.py -t 6885075668:AAHo5FR5xWffNA7oXu_TS7jHnk41AsNyXcc -c 7136411148
```

Jika Anda tidak familiar dengan CLI, Anda bisa menggunakan versi GUI. Anda bisa masuk folder **web** dan klik file **index.html** nya lalu Anda bisa mencoba nya langsung. Pastikan koneksi internet menyala sebelum menggunakan program ini.

## Cara Kerja Program

Program yang saya buat akan melakukan request menggunakan method POST yang artinya ketika saya mengirimkan pesan nanti akan masuk ke telegram nya si penipu dengan status response 200 yang artinya pengiriman berhasil.  Hal ini saya sudah tahu token dan chat ID nya si penipu yang nanti akan melakukan hit API telegram bot nya. Jika status nya bukan 200 berarti ada kesalahan dan mungkin akan melemparkan 429 yang artinya terlalu menerima permintaan dari saya, sehingga bot susah menanggapi.

## Screenshots

Saya akan bagikan beberapa screenshots sebagai bukti untuk mengirimkan pesan ke bot telegram milik teman saya.

### GUI

Pengiriman pesan pada versi GUI :

![InkedInkedscreenshot1_LI](https://github.com/galihap76/penipu-dana/assets/83481679/63fc9aba-28e9-4e0c-a1d2-d072af20ed99)

<hr/>

### CLI

Pengiriman pesan pada versi CLI :

![Screenshot2](https://github.com/galihap76/penipu-dana/assets/83481679/de71c5db-c0a1-4b64-86ac-d11452c3727f)

<hr/>

### Hasil 

Hasil ketika pengiriman berhasil akan masuk ke telegram milik teman saya :

![res (2)](https://github.com/galihap76/penipu-dana/assets/83481679/3a8d68e3-3c1e-42c0-a7a9-02e6ea029f3d)

<hr/>

### BOT Telegram Penipu
![image](https://github.com/galihap76/penipu-dana/assets/83481679/42615beb-4f7c-48d6-8bda-bc053a1fa70c)

Jika Anda ingin mencoba nya silakan gunakan token dan chat id milik penipu pada file **penipu.txt**. 

## Cara Mendapatkan Token Dan Chat ID

Anda perlu mendapatkan token dan chat id telegram si penipu. Cara nya bagaimana? Cara nya bisa di lakukan oleh saya seperti pada gambar di atas. Atau bisa juga, jika si penipu menggunakan berbentuk aplikasi pada format **apk** seperti undangan pernikahan, Anda perlu melakukan decompile untuk mendapatkan source code asli. Namun, saya fokuskan pada cara di atas.  

## Info

Sepengalaman yang saya lihat, penipu biasanya mencari korban yang awam dan memberikan link tersebut, kebanyakan lewat WhatsApp. Web modelan di atas banyak bertebaran di mana mana, mungkin si penipu cuman ambil doang atau bisa jadi beli dari seseorang. Saya gak tahu juga, bisa jadi penipu mengerti bikin web phising dari nol dan melakukan aksi serangan nya.  

Bagi orang yang mengerti komputer, bisa saja di lihat source code tadi seperti cara di atas dan apakah web ini memang dari pihak resmi. Web si penipu menggunakan pemrograman JavaScript di sertai menggunakan Library JQuery, jadi saya bisa melihat kode nya di browser milik saya. Pihak DANA memang sudah memberi peringatan dan pencegahan pada laman info aplikasi. Ini bisa di lihat pada aplikasi DANA sendiri :

![Gambar WhatsApp 2024-06-22 pukul 12 04 00_aec5bb69 (1)](https://github.com/galihap76/penipu-dana/assets/83481679/3522241d-5f99-430d-85c9-fb92d7367f3f)

<hr/>

![Gambar WhatsApp 2024-06-22 pukul 12 04 00_aa33e6db](https://github.com/galihap76/penipu-dana/assets/83481679/5bf2bf87-a9c4-4bd4-a445-1d13362ca68d)

## Penutup

Tetap jaga keamanan internet terkadang kita bisa lengah dari serangan penipuan seperti ini. Program ini mungkin akan menerima pembaruan dari saya jika saya ada waktu melakukan nya. Terima kasih.

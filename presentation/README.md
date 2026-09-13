# Presentasi Kesehatan Kulit Remaja

Presentasi ini adalah aplikasi HTML, CSS, dan JavaScript statis. Tidak memerlukan internet, React, atau instalasi dependency.

## Menjalankan Presentasi

1. Buka Terminal di folder `presentation`.
2. Jalankan:

```bash
python3 -m http.server 8000
```

3. Buka Chrome dan akses:

```text
http://localhost:8000/
```

4. Pilih tombol `Layar Penuh` sebelum presentasi dimulai.

## Navigasi

- Tombol `Sebelumnya` dan `Berikutnya` untuk navigasi utama.
- Panah kiri/kanan, `Space`, `PageUp`, dan `PageDown` pada keyboard juga dapat digunakan.
- Swipe kiri/kanan dapat digunakan pada layar sentuh.
- Setiap slide langsung menampilkan seluruh isi materi. Tombol `Berikutnya` selalu berpindah ke slide berikutnya.
- `Home` kembali ke slide pertama dan `End` menuju slide terakhir.

## Catatan Operator

- Semua gambar dibaca secara lokal dari `assets/pics`, sehingga koneksi internet tidak diperlukan.
- Gunakan Chrome versi terbaru untuk dukungan layar penuh dan swipe yang paling baik.

## Membuat PDF

1. Jalankan presentasi seperti langkah di atas.
2. Buka `http://localhost:8000/?print=1`.
3. Tekan `Command + P` pada macOS atau `Ctrl + P` pada Windows.
4. Pilih `Save as PDF` dan gunakan orientasi `Landscape`.

Mode cetak menggunakan halaman A4 landscape dengan latar polos agar hasilnya konsisten di Safari dan Chrome. Mode ini menampilkan seluruh slide tanpa tombol navigasi dan tanpa kuis interaktif.

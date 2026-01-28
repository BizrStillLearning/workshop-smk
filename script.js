// Mengambil elemen tombol dari HTML
const tombol = document.getElementById('tombolSapa');

// Menambahkan aksi ketika diklik
tombol.addEventListener('click', function() {
    // Menampilkan notifikasi interaktif
    alert("Terima kasih sudah berkunjung ke website saya!");

    // Bonus: Mengubah teks tombol secara instan
    tombol.innerText = "Sapaan Terkirim!";
    tombol.style.backgroundColor = "#2980b9";
});
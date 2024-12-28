// Fungsi untuk menampilkan pesan cinta ketika tombol diklik
document.getElementById('loveMessageBtn').addEventListener('click', function() {
    const loveMessage = document.getElementById('loveMessage');
    
    // Menampilkan pesan cinta dengan animasi
    loveMessage.style.display = loveMessage.style.display === 'none' ? 'block' : 'none';
});


// Script ini bisa digunakan untuk menambahkan efek interaktif seperti animasi atau transisi
document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', function() {
            item.style.transform = 'scale(1)';
        });
    });
});

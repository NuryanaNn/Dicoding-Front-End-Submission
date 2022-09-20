function ubah(pilih) {
    if (pilih == 1) document.getElementById('gambar').src = 'Assets/al-kamil.jpg';
    else if (pilih == 2) document.getElementById('gambar').src = 'Assets/al-kamil2.jpg';
    else if (pilih == 3) document.getElementById('gambar').src = 'Assets/al-kamil3.jpg';
    else if (pilih == 4) document.getElementById('gambar').src = 'Assets/al-kamil4.jpg';
}

window.addEventListener('scroll', function(){
    const header = document.querySelector('nav');
    header.classList.toggle("sticky", window.scrollY > 0)
});

let burger = document.querySelector('.burgerMenu');
let mobilenav = document.querySelector('.mobile-nav');

burger.addEventListener('click', function(){
    mobilenav.classList.toggle('active');
})

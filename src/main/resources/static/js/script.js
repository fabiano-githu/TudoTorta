document.addEventListener("DOMContentLoaded", function () {



    /* ========================
       Hover nos ícones do footer
    ======================== */
    const footerIcons = document.querySelectorAll('footer i');
    footerIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => icon.style.transform = 'scale(1.3)');
        icon.addEventListener('mouseleave', () => icon.style.transform = 'scale(1)');
    });

    /* ========================
       Cards de produtos interativos
    ======================== */
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'scale(1.05)');
        card.addEventListener('mouseleave', () => card.style.transform = 'scale(1)');
        card.addEventListener('click', () => alert(`Você clicou em: ${card.querySelector('.card-title').textContent}`));
    });

    /* ========================
       Carousel automático de comentários
    ======================== */
    const commentCarousel = document.querySelector('#commentCarousel');
    if (commentCarousel) {
        const carousel = new bootstrap.Carousel(commentCarousel, {
            interval: 4000,
            ride: 'carousel',
            pause: 'hover',
            wrap: true
        });
    }

});
// Seleciona o botão
const btnTop = document.getElementById('btnTopMinimal');

// Mostra ou esconde o botão conforme rolagem
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Mostra após rolar 300px
        btnTop.style.display = 'flex';
    } else {
        btnTop.style.display = 'none';
    }
});

// Scroll suave ao topo
btnTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

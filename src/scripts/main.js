document.addEventListener('DOMContentLoaded', function () {

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual <= alturaHero) {
            ocultaLogo();
        } else {
            exibeLogo();
        }
    })
})

function ocultaLogo() {
    const logo = document.querySelector('.header__logo');
    logo.classList.add('header__logo--is-hidden');
}

function exibeLogo() {
    const logo = document.querySelector('.header__logo');
    logo.classList.remove('header__logo--is-hidden');
}
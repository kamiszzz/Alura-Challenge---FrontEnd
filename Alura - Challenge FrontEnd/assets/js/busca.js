const botaoMenu = document.querySelector('.cabecalho__search')
const menu = document.querySelector('.menu__busca')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__busca--ativo')
})
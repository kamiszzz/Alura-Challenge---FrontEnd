const linguagem = document.querySelector ('.js-linguagem')
const areaDoCodigo = document.querySelector ('.codigo-wrapper')
const botao = document.querySelector ('.botao-preview')

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})
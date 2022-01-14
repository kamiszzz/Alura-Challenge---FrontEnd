const linguagem = document.querySelector('.js-linguagem')
const color = document.querySelector('.projectcolor')
const areaDoCodigo = document.querySelector('code')
const tituloProjeto = document.querySelector('.js-titulo-projeto')
const descricaoProjeto = document.querySelector('.js-descricao-projeto')
const botaoPreview = document.querySelector('.botao-preview')
const botaoSalvar = document.querySelector('.botao-salvar')

botaoPreview.addEventListener('click', () => {
    let codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

function mudaLinguagem() {
    let codigo = {'texto': areaDoCodigo.querySelector('code').innerText}
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
    areaDoCodigo.firstChild.innerText = codigo.texto
}


botaoSalvar.addEventListener('click', () => {
    // if (typeof(Storage) !== "undefined") {
    //     console.log('Yay, support!')
    //     const projeto = montaProjeto()
    //     salvaLocalStorage(projeto)
    // } else {
    //     console.log('Nay, no support!')
    // }


    const  projetoInfo = JSON.parse(localStorage.getItem('key')) || []

    projetoInfo.push({
        nomeDoProjeto: tituloProjeto.value,
        descricaoDoProjeto: descricaoProjeto.value,
        linguagem: linguagem.value,
        codigo: areaDoCodigo.innerText,
        color: color.value
      
    })
    
    localStorage.setItem('key', JSON.stringify(projetoInfo))
    alert ('Projeto Salvo')
    

})

const listaProjetos = document.querySelector('.todos-projetos')




function criaCartao(titulo, descricao, codigo, cor) {

    const novoCartao = document.createElement('li')

    const cartao = ` 
    <li>
    <section id="conteudo" class="retangulo" style="background:${cor};">
                        <div class="editordecodigo">
                  
                            <img class="botao" src="./assets/img/mac_buttons (1).svg">
                  
                            <div class="codigo-wrapper js-codigo-wrapper">
                              <code class="preview hljs" aria-label="editor">${codigo}</code>
                          </div>
                        
                    </section>
                    <section class="info__comunidade">
                    <div class="informacao__comu">
                      <h2 class="titulo__projeto">${titulo}</h2>
                      <p class="descricao__projeto">${descricao}</p>
                  </div>
                  <section class="icones__comunidade">
                  <div class="icone__code">
                      <div class="icone__comentario">
                          <div class="comentario">
                              <img class="comentario" src="./assets/img/Vector (2).svg">
                              <p class="quantidade">9</p>
                          </div>
                          <div class="icones__code">
                              <img class="icone__like" src="./assets/img/Vector (3).svg">
                              <p class="quantidade">9</p>
                          </div>
                      </div>
                      <div class="usuario__foto">
                          <img src="./assets/img/PhotoUsuario.svg" class="imagem__usuario">
                          <p class="texto">@harry</p>
                      </div>
                    </section>
                  </div>
                </section>

              </div>
                 
                
               </li> 
    `
    novoCartao.innerHTML = cartao
    return novoCartao

    
    

}

function mostraProjetos() {

    const todosProjetos = JSON.parse(localStorage.getItem('key')) || []
    console.log(todosProjetos)
    todosProjetos.forEach(projeto => { listaProjetos.appendChild(criaCartao( projeto.nomeDoProjeto, projeto.descricaoDoProjeto, projeto.codigo, projeto.color))
        
    });
}

mostraProjetos()


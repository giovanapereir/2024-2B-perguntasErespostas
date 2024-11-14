function criaCartao( Materia, pergunta, resposta){
    let caixa =document.getElementById('caixa')
    let cartao = document.createElement('article')

    cartao.className = 'cartao'
    
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3> ${Materia} </h3>
            <div class="cartao__conteudo__pergunta">
                <p> ${pergunta} </p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `

    caixa.appendChild(cartao)
}
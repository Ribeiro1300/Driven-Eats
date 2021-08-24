let main = "";
let drink = "";
let desert = "";
let finalPrice = 0.0;
function verificarInformacoes(prato, bebida, sobremesa, precos, total)
{
    //Essa função mostraria a tela de confirmação do pedido
    let prato1 = document.querySelector(".pratoUm")
    let prato1Preco = document.querySelector(".preco1")
    let prato2 = document.querySelector(".pratoDois")
    let prato2Preco = document.querySelector(".preco2")
    let prato3 = document.querySelector(".pratoTres")
    let prato3Preco = document.querySelector(".preco3")
    let precoTotal = document.querySelector(".totalPreco")
    prato1.innerHTML = prato
    prato1Preco.innerHTML = precos[0]
    prato2.innerHTML = bebida
    prato2Preco.innerHTML = precos[1]
    prato3.innerHTML = sobremesa
    prato3Preco.innerHTML = precos[2]
    precoTotal.innerHTML = total


    main = prato;
    drink = bebida;
    desert = sobremesa;
    finalPrice = total;
    // let linkBotao2 = document.querySelector(".botao2")
    // linkBotao2.setAttribute("onclick",`finalizar(${prato}, ${bebida}, ${sobremesa}, ${total})`)

    //finalizar(prato, bebida, sobremesa, total)
}
function finalizar()
{
    let nome = prompt("Digite seu nome:")
    let endereco = prompt("Digite seu endereço:")
    // let pedidoPrato = prato
    // let pedidoBebida = bebida
    // let pedidoSobremesa = sobremesa
    // let pedidoTotal = total
    let mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${main}
    - Bebida: ${drink}
    - Sobremesa: ${desert}
    Total: R$ ${finalPrice}

    Nome: ${nome}
    Endereço: ${endereco}`)
    window.open("https://api.whatsapp.com/send/?phone=5521971346486&text="+mensagem, "_blank")
}
function verificarPedido()
{
    let itensSelecionados = document.querySelectorAll(".selecionado")
    let sizeSelecionados = itensSelecionados.length
    let botaoPedido = document.querySelector(".botao")
    if (sizeSelecionados == 6)
    {
        let prato = itensSelecionados[0].querySelector("h3").innerHTML
        let precoPrato = itensSelecionados[0].querySelector(".preco h3").innerHTML
        precoPrato = parseFloat(precoPrato)
        let bebida = itensSelecionados[2].querySelector("h3").innerHTML
        let precoBebida = itensSelecionados[2].querySelector(".preco h3").innerHTML
        precoBebida = parseFloat(precoBebida)
        let sobremesa = itensSelecionados[4].querySelector("h3").innerHTML
        let precoSobremesa = itensSelecionados[4].querySelector(".preco h3").innerHTML
        precoSobremesa = parseFloat(precoSobremesa)
        let precos = [precoPrato,precoBebida,precoSobremesa]
        let total = precoPrato + precoBebida + precoSobremesa
        botaoPedido.innerHTML= "Fechar pedido"
        botaoPedido.setAttribute("style", "background: #32B72F")
        botaoPedido.addEventListener("click", function ()
        {
            let confirmacao = document.querySelector(".confirmacao")
            setTimeout(function(){
                confirmacao.classList.remove("hidden");
            },500)
            
            verificarInformacoes(prato, bebida, sobremesa, precos, total.toFixed(2))
        })
    }
}

let opcao = document.querySelectorAll(".opcao")
let sizeOpcao = opcao.length
for ( let i = 0; i < sizeOpcao; i++)
{
    opcao[i].addEventListener("click", function ()
    {
        let verificarBorda = document.querySelector("."+this.classList[0]+".selecionado")
        let verificarCheck = document.querySelector("."+this.classList[0]+" .preco .check"+".selecionado")
        if (verificarBorda !== null)
        {
            verificarBorda.classList.remove("selecionado")
            verificarCheck.classList.remove("selecionado")
        }       
        this.classList.add("selecionado")
        let check = this.querySelector(".preco .check")
        check.classList.add("selecionado")
        verificarPedido()
    })
}

const cancel = () =>{
    document.querySelector(".confirmacao").classList.add("hidden")
}

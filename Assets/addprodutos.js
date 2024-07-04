import { conexaoProd } from "./listarprodutos.js"

const form = document.querySelector(".form__campos")

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const campoNome = document.getElementById("nome")
    const campoValor = document.getElementById("valor")
    const campoImg = document.getElementById("imagem")
    addProduto(event)

    campoNome.value = ''
    campoValor.value = ''
    campoImg.value = ''
})


async function addProduto (event) {
    
       let nome = event.target.elements["nome"].value;
        let preco = event.target.elements["valor"].value;
        let img = event.target.elements["imagem"].value;

       await conexaoProd.criarProduto(nome, preco, img)
}


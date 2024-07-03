import { conexaoProd } from "./listarprodutos.js"

const form = document.querySelector(".form__campos")

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    addProduto(event)
})


async function addProduto (event) {
    
       let nome = event.target.elements["nome"].value;
        let preco = event.target.elements["valor"].value;
        let img = event.target.elements["imagem"].value;

       await conexaoProd.criarProduto(nome, preco, img)
}


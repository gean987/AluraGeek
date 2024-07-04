let produtos = [];

 conectaProd();

async function conectaProd(){
    const conecta = await fetch("https://6685f76983c983911b006c66.mockapi.io/produtos/itens")
     produtos = await conecta.json() 
     inserirProdutos(produtos)     
}

    function inserirProdutos(produtos) {
        const itens = document.getElementById('itens'); 
    
        itens.innerHTML = ''; 
    
        produtos.forEach(produto => {
            const item = document.createElement('li');
            item.classList.add('lista__produtos__item');
    
            const img = document.createElement('img');
            img.src = produto.img;
            img.alt = '';
    
            const nome = document.createElement('p');
            nome.textContent = produto.nome;
    
            const valor = document.createElement('div');
            valor.classList.add('lista__produtos__item__val');
            valor.textContent = `R$ ${produto.preco}`;
    
            const botaoDeletar = document.createElement('button');
            botaoDeletar.classList.add('lixeira');
            botaoDeletar.innerHTML = '<img src="./Assets/imagens/lixeira.png" alt="img lixeira">';
    
            botaoDeletar.onclick = function() {
                excluirProduto(produto.id);
            };
    
            valor.appendChild(botaoDeletar);
    
            item.appendChild(img);
            item.appendChild(nome);
            item.appendChild(valor);
    
            itens.appendChild(item);
        });
    }
    
    
async function criarProduto (nome, preco, imagem){
    await fetch("https://6685f76983c983911b006c66.mockapi.io/produtos/itens", {
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },

        body: JSON.stringify({
            nome: nome,
            preco: preco,
            img: imagem
        })


    })
    await conectaProd()
}

async function excluirProduto(id){
    await fetch(`https://6685f76983c983911b006c66.mockapi.io/produtos/itens/${id}`, {
        method:"DELETE",
    } )
    await conectaProd()
}


export const conexaoProd = {criarProduto}
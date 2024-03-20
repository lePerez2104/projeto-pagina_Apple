const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');


/* Objeto aqui é um pacote de informações, como uma carteira de identidade */
// apresentando os objetos ao JavaScript
const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste',
};
const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno',
};
const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite',
};
const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar',
};
const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro',
};

// ARRAY
// minhaLista [2] -> acessa informação na lista pela posição
// meiaNoite.pasta -> acessa informação na lista pelo campo
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
// lista de opções de tamanhos
const opcoesTamanho = ['41mm', '45mm'];

// fixa a imagem em miniatura quando a página for aberta
let imagemSelecionada = 1;
// fixa a opção de tamanho 1 quando a página for aberta
let tamanhoSelecionado = 1
let corSelecionada = 1;

function trocarImagem() {
    // troca para a imagem que está selecionada no momento
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    // caminho para acessar dinamicamente a imagem em miniatura selecionada
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}

function trocarTamanho() {
    // atualizar variável de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    // mudar o título do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +" para caixa de " + opcoesTamanho[tamanhoSelecionado];
    // mudar o tamanho da imagem de acordo com a opção
    // NÃO ESTÁ FUNCIONANDO, VERIFICAR DEPOIS !!! (01:48:50)
    if (opcoesTamanho[tamanhoSelecionado] === '41mm') {
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

function trocarCor() {
    // atualizar cor selecionada 
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);

    // trocar título da página
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +" para caixa de " + opcoesTamanho[tamanhoSelecionado];

    // trocar nome da cor
    nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome;

    // trocar imagem das miniaturas exibidas
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';

    // trocar imagem de visualização
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}
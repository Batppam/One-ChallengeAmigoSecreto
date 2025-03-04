let participantes = [];  // Cria um array vazio para armazenar os nomes dos participantes

// Função para adicionar um amigo à lista
function adicionarAmigo(){
    
    let inputAmigo = document.getElementById('amigo'); // Obtém o elemento de entrada do nome do amigo pelo ID
    let nomeAmigo = inputAmigo.value; // Obtém o valor digitado no campo de entrada

    // Verifica se o campo está vazio e exibe um alerta caso esteja
    if(!nomeAmigo) {
        alert("Digite o nome do amigo");
        return;  
    }   
    
    // Adiciona o nome digitado ao array de participantes
    participantes.push(nomeAmigo);
    inputAmigo.value = ""; // Limpa o campo de entrada após adicionar o nome
    inputAmigo.focus(); // Coloca o foco de volta no campo de entrada para facilitar a adição de mais nomes
    atualizarLista(); // Atualiza a lista de amigos exibida na tela
}

// Função para atualizar a exibição da lista de amigos na interface
function atualizarLista() {
    
    let listaAmigos = document.getElementById("listaAmigos"); // Obtém o elemento da lista pelo ID
    
    // Limpa a lista antes de recriá-la (evita duplicações)
    listaAmigos.innerHTML = "";

    // Percorre o array de participantes e adiciona cada nome à lista
    for(let i = 0; i < participantes.length; i++){
        
        let item = document.createElement("li"); // Cria um elemento <li> para representar um amigo na lista
        item.textContent = participantes[i]; // Define o texto do item como o nome do amigo correspondente no array
        listaAmigos.appendChild(item); // Adiciona o item à lista exibida na interface
    }
    document.getElementById('reiniciar').removeAttribute('disabled');
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo(){
    // Verifica se há pelo menos 3 participantes antes de realizar o sorteio
    if (participantes.length < 3){
        alert("Adicione pelo menos 3 amigos para sortear");
        return; // Interrompe a função se houver menos de 3 participantes
    }
   
    let amigoSorteado = participantes[Math.floor(Math.random() * participantes.length)]; // Seleciona aleatoriamente um amigo do array de participantes
    let resultado = document.getElementById("resultado"); // Obtém o elemento onde o resultado será exibido
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`; // Exibe o nome do amigo sorteado na interface

    let limparLista = document.getElementById("listaAmigos"); // Obtém o elemento da lista de amigos para limpar a exibição
    limparLista.innerHTML = ""; // Limpa a lista de amigos da interface após o sorteio
}

// Reiniciar Jogo
function reiniciarJogo(){
    alert("Jogo Reiniciado")
    participantes = []; // Zera o array de participantes
    document.getElementById("listaAmigos").innerHTML = ""; // Limpa a lista da interface
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado do sorteio
    document.getElementById("reiniciar").setAttribute('disabled', 'true'); // Desabilita o botão de reinício
}
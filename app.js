let participantes = [];  // Cria um array vazio para armazenar os nomes dos participantes


 alert("Adicione pelo menos 3 amigos iniciar o jogo"); // Aviso de amigos minimos. 

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

     if (participantes.length >= 3){ // Verifica se há pelo menos 3 participantes antes de realizar o sorteio
        document.getElementById('sortear').removeAttribute('disabled'); // Habilitar botão de reset
        return; 
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = ""; // Limpa a exibição da lista de amigos

    if (participantes.length === 0) { // Verifica se há amigos ainda na lista
        alert("Não há mais amigos para sortear!");
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilitar botão de reset
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * participantes.length); // Sorteia um amigo aleatorio
    let amigoSorteado = participantes[indiceSorteado]; 

    participantes.splice(indiceSorteado, 1); // Remove o amigo sorteado da lista

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`; // Exibe o nome do sorteado
}

// Reiniciar Jogo
function reiniciarJogo(){
    alert("Jogo Reiniciado")
    participantes = []; // Zera o array de participantes
    document.getElementById("listaAmigos").innerHTML = ""; // Limpa a lista da interface
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado do sorteio
    document.getElementById("reiniciar").setAttribute('disabled', 'true'); // Desabilita o botão de reinício
    document.getElementById("sortear").setAttribute('disabled', 'true'); // Desabilita o botão de sorteio
}
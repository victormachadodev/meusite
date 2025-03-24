function confirmarPresenca() {
    let mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "";
    mensagem.classList.remove("hidden");

    // Criar animação de emojis caindo
    for (let i = 0; i < 50; i++) {
        criarEmoji();
    }
}

function negarPresenca() {
    let mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = " Você não tem essa opção!";
    mensagem.classList.remove("hidden");
}

function criarEmoji() {
    const emojiArray = ['💗', '🥰', '🎉', '💖', '🥳'];
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerHTML = emojiArray[Math.floor(Math.random() * emojiArray.length)];
    
    // Posição aleatória no topo da tela
    emoji.style.left = Math.random() * 100 + "vw";
    
    // Adicionar o emoji à tela
    document.body.appendChild(emoji);

    // Remover o emoji após a animação
    setTimeout(() => {
        emoji.remove();
    }, 8000);
}
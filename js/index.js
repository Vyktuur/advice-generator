const botao = document.getElementById('botao');
const idconselho = document.getElementById("idconselho");
const conselho = document.getElementById("conselho");

async function gerarConselho() {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const conteudoPromessa = await resposta.json();
    const seletorId = `ADVICE #${conteudoPromessa.slip.id}`;
    const seletorTexto = `"${conteudoPromessa.slip.advice}"`;

    idconselho.innerHTML = seletorId;
    conselho.innerHTML = seletorTexto;
}

botao.addEventListener("click", gerarConselho);

gerarConselho();


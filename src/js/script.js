const botaoDado = document.querySelector('#dice-btn')
let idConselho = document.querySelector('.advice-id')
let textoConselho = document.querySelector('.advice-text')

async function geradorDeConselhos(){
    const url = "https://api.adviceslip.com/advice";
    const respostaDaUrl = await fetch(url);
    return await respostaDaUrl.json();
};

botaoDado.addEventListener('click', async function() {
    const conselho = await geradorDeConselhos();
    idConselho.innerHTML = `advice #${conselho.slip.id}`;
    textoConselho.innerHTML = conselho.slip.advice;
});

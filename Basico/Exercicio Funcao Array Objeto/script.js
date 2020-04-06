//Funçao void(vazia)
function meuEscopo(){
    const form = document.querySelector('.formulario');

    //Função com método de clique.(evento)
    form.onsubmit = (evento) =>{
        evento.preventDefault();
        alert(`Você clicou em mim!`);
    };
}

meuEscopo();
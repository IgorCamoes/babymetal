let link = document.querySelectorAll('.mscTitle');
let section = document.querySelector('section');
let imagem = document.querySelector('img');

function mudarConteudo(){
    texto[0].innerHTML = 'seilamano aporracaraio';
    link[0].style.color = 'red';
}

link[0].onclick = mudarConteudo();
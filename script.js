const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const audioCapitulo = document.getElementById("audio-capitulo");
const nomeCapitulo = document.getElementById("capitulo");

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;



function mudarTotal(){
  let duracaoAudio = document.getElementById("total")
duracaoAudio.textContent = segundosParaMinutos (Math.floor(audioCapitulo.duration))

}

function tocarFaixa() {
  audioCapitulo.play();
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
}
function pausarFaixa() {
  audioCapitulo.pause();
  botaoPlayPause.classList.add("bi-play-circle-fill");
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
}

function tocarOuPausar() {
  if (taTocando === 0) {
    tocarFaixa();
    taTocando = 1;
  } else {
    pausarFaixa();
    taTocando = 0;
  }
}
function tocarNomeFaixa() {
  nomeCapitulo.innerText = "Capítulo " + capituloAtual;
}

function proximaFaixa() {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual = capituloAtual + 1;
  }

  
  audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarFaixa();
  taTocando = 1;
  tocarNomeFaixa();
}

function voltarFaixa() {
  if (capituloAtual === 1) {
    capituloAtual = numeroCapitulos;
  } else {
    capituloAtual = capituloAtual - 1;
  }

  audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarFaixa();
  taTocando = 1;
  tocarNomeFaixa();
}

function atualizarbarra() {
  let barra = document.querySelector('progress');
  barra.style.width = 
    ((audioCapitulo.currentTime / audioCapitulo.duration) * 100) +
    "%";
    let tempoDecorrido = document.getElementById("atual")
    tempoDecorrido.innerText = segundosParaMinutos (Math.floor (audioCapitulo.currentTime))
}

function segundosParaMinutos(segundos){
  let campoMinutos = Math.floor(segundos/60);
  let campoSegundos = segundos % 60;

  if(campoSegundos < 10){
    campoSegundos = '0' + campoSegundos
  }
  return campoMinutos + ":" + campoSegundos
}




setInterval(mudarTotal, 1)

setInterval(atualizarbarra, 10)
botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximaFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);

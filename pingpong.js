// Criar Bolinha
 let raio = 7.5;
 let xBolinha = 100;
 let yBolinha = 200;
 let diametro = raio * 2;

// Velocidade da Bolinha
 let velocidadeXBolinha = 6;
 let velocidadeYBolinha = 6;

// Minha Raquete
 let xRaquete =5;
 let yRaquete = 150;

// Raquete Oponente
 let xRaqueteOponente = 585;
 let yRaqueteOponente = 150;

// Placar
 let meusPontos = 0;
 let pontosOponente = 0;

 // Dificuldade
 let dificuldade = "Normal";
 let trilha,ponto,raquetada;

 function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
 }

 function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw(){
  background(0);
  movimentoBolinha();
  raquetes(xRaquete,yRaquete)
  raquetes(xRaqueteOponente,yRaqueteOponente)
  npc(dificuldade)
}

if(keyIsDown(UP_ARROW)){
  yRaquete -= 10}
 
if(keyIsDown(DOWN_ARROW)){
  yRaquete += 10}
 
if(xBolinha - raio < xRaquete + 10 & yBolinha - raio < yRaquete + 90 & yBolinha + raio > yRaquete){
  velocidadeXBolinha *= -1;
  raquetada.play()}
  
function movimentoBolinha(){
  circle(xBolinha,yBolinha,diametro);
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  if(xBolinha + raio > width || xBolinha-raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha-raio < 0){
    velocidadeYBolinha *= -1}}

function raquetes(xRaquete,yRaquete){
  rect(xRaquete,yRaquete, 10,90)
}

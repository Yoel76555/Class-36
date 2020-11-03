var canvas, database;
var form, game, player;
var gameState=0;
var playerCount;


function setup(){
 
  canvas=createCanvas(400,400);
  database = firebase.database();
  console.log(database);
  game=new Game();
  game.getState();
  game.start();


  

 
}

function draw(){
  //background("white");
  
    
    
  
}


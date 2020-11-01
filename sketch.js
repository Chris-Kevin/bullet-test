var speed,weight;
var wall,thickness;
var bullet;


function setup(){
  createCanvas(1600,400);

speed = random(30,100);

thickness = random(22,83);

weight = random(30,52);

wall= createSprite(1400,200,thickness,height/2);

bullet = createSprite(50,200,15,15);



}
function draw(){
background(0);
   
  bullet.velocityX = speed;

  if(hasCollided(bullet,wall)){

bullet.velocityX = 0;
var damage = 0.5 * weight * speed *speed/(thickness * thickness * thickness);

  } 
  
  if(damage>10){

wall.shapeColor = color(250,0,0);

  }
  if(damage<10){

    wall.shapeColor = color(0,250,0)

  }

  drawSprites();}

  function hasCollided(lbullet,lwall){

 bulletRightEdge = lbullet.x + lbullet.width;
 wallLeftEdge = lwall.x;
 if(bulletRightEdge>=wallLeftEdge){

  return true;

 }
 return false;


  }
  
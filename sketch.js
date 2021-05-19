var movingR, fixedR;

function setup() {
  createCanvas(400,400);
movingR=createSprite(200, 200,40, 50);
movingR.shapeColor='blue';
fixedR=createSprite(300, 200, 30, 60);
fixedR.shapeColor='green';
}

function draw() {
  background('grey'); 
  movingR.x=World.mouseX;
  movingR.y=World.mouseY; 

  if(movingR.x-fixedR.x<movingR.width/2+fixedR.width&&
    fixedR.x-movingR.x<movingR.width/2+fixedR.width&&
    movingR.y-fixedR.y<movingR.height/2+fixedR.height&&
    fixedR.y-movingR.y<movingR.height/2+fixedR.height ){
    movingR.shapeColor='red';
    fixedR.shapeColor='red';
    }else{
      movingR.shapeColor='blue';
      fixedR.shapeColor='green';
        }
  drawSprites();
}
var fixedRect, movingRect;
function setup()  {
createCanvas(1200, 600);
movingRect = createSprite(400, 200, 100, 50);
movingRect.shapeColor = 'blue';
fixedRect = createSprite(600, 250, 100, 50);
fixedRect.shapeColor = 'red';

}
function draw()  {
  background(0);
movingRect.x = mouseX;
movingRect.y = mouseY;
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2) {
    fixedRect.shapeColor = 'white';
  movingRect.shapeColor = 'pink';
}
else {
fixedRect.shapeColor = 'red';
movingRect.shapeColor = 'blue';
}



drawSprites()
}


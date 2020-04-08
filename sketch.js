var fixedRec, movinRec;

function setup() {
  createCanvas(1200,800);
  fixedRec=createSprite(600, 400, 50, 80);
  fixedRec.shapeColor="green";
  fixedRec.debug="true";
  movinRec=createSprite(400,200,80,30);
  movinRec.shapeColor="green";
  movinRec.debug="true";
  
}

function draw() {
  background(0,0,0);  
  console.log(movinRec.x - fixedRec.x);
  movinRec.x=World.mouseX;
  movinRec.y=World.mouseY;

  if(movinRec.x - fixedRec.x < fixedRec.width/2 + movinRec.width/2 
    && fixedRec.x - movinRec.x < fixedRec.width/2 + movinRec.width/2
    && movinRec.y - fixedRec.y < fixedRec.height/2 + movinRec.height/2
    && fixedRec.y - movinRec.y < fixedRec.height/2 + movinRec.height/2){
    movinRec.shapeColor = "red";
    fixedRec.shapeColor = "red";
}
else {
  movinRec.shapeColor = "green";
  fixedRec.shapeColor = "green";

}
  drawSprites();
}
var fixrect,movingrect;
var rect1 , rect2 , rect3 , rect4;


function setup() {
  createCanvas(1200,800);
  fixrect = createSprite(400,100,50,80);
fixrect.shapeColor = "green";
fixrect.debug=true;


  movingrect = createSprite(400,300,80,30);
  movingrect.shapeColor="green";

  rect1 = createSprite(100,100,50,70);
  rect1.shapeColor="green";

  rect2 = createSprite(200,100,50,70);
  rect2.shapeColor="green";

  rect3 = createSprite(300,100,50,70);
  rect3.shapeColor="green";

  rect4 = createSprite(400,100,50,70);
  rect4.shapeColor="green";


  movingrect.debug=true;
  movingrect.velocityY = -5;
  fixrect.velocityY= +5;
}

function draw() {
  background(255,255,255); 
 
  bounceoff(movingrect,fixrect);
 
 if(istouching(movingrect,rect1)){
  movingrect.shapeColor="blue";
  rect1.shapeColor="blue";
 }

 else{
  movingrect.shapeColor="green";
  rect1.shapeColor="green";
 }
 

 
  
  drawSprites();
}


function istouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2
    && object1.y-object2.y<object2.height/2+object1.height/2
    && object2.y-object1.y<object2.height/2+object1.height/2
    ){
    return true; 
   }
  
   else{
    return false;
   }
}
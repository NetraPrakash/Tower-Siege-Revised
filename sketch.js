var cannon,cb1,cb2,cb3,ground,base,b1,b2,b3,b4,b5,b6,b7;

function setup() {
  createCanvas(800,400);

 cannon= createSprite(400, 300, 100, 40);
 cannon.shapeColor=("blue");

 base= createSprite(375,350,50,60);
 base.shapeColor=("blue");

cb1= createSprite(400,300,40,40);
cb1.shapeColor=("pink");
cb1.visible= false;

cb2= createSprite(400,300,40,40);
cb2.shapeColor=("purple");
cb2.visible= false;

cb3= createSprite(400,300,40,40);
cb3.shapeColor=("yellow");
cb3.visible= false;

ground= createSprite(400,390,800,20);
ground.shapeColor=("purple");

b1= createSprite(600,200,50,50);
b1.shapeColor=("purple");
b2= createSprite(550,250,50,50);
b2.shapeColor=("green");
b3= createSprite(650,250,50,50);
b3.shapeColor=("green");
b4= createSprite(530,300,50,50);
b4.shapeColor=("blue");
b5= createSprite(670,300,50,50);
b5.shapeColor=("blue");
b6= createSprite(500,350,50,50);
b6.shapeColor=("red");
b7= createSprite(700,350,50,50);
b7.shapeColor=("red")
}

function draw() {
  background(255,255,255); 

if (keyDown("space")){
  cb1.visible= true;
cb1.velocityX=+5;
cb1.velocityY=-3;
}

if (keyDown("space") && cb1.visible===true){
  cb2.visible= true;
  cb2.velocityX=+5;
  cb2.velocityY=-3;
  }

  if (keyDown("space") && cb2.visible===true){
    cb3.visible= true;
    cb3.velocityX=+5;
    cb3.velocityY=-3;
    }

    if (cb1.y<=250){
      b1.y=400;
      b2.y=400;
      b3.y=400;
      b4.y=400;
    }
  drawSprites();
}

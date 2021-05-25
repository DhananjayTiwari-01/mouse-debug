const BG = 23
const BG2 = 45
const BG3 = 78

var mouse, mouseImg;


// Const is just like numbers in math those are not changeble 

// ------------------------------------------------------------------------------------------
// Var is like alphabet those value is changeble


function preload() {
  mouseImg = loadImage("mouse3.png")


}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mouse = createSprite(width / 2, 200, 50, 50)
  mouse.velocityY = 2;
  mouse.shapeColor = "red"
  mouse.addImage(mouseImg);
  mouse.scale = 0.1
  mouse.debug = true

}

function draw() {
  background(BG, BG2, BG3);

  if (mouse.y == 450) {
    mouse.destroy();
    mouse = createSprite(mouse.x, 200, 50, 50)
    mouse.velocityY = 2;
    mouse.addImage(mouseImg);
    mouse.scale = 0.1
    mouse.debug = true

  }


  keyPressed();
  drawSprites();
}

function keyPressed() {


  if (keyDown("space")) {

    mouse.velocityY = 0;

  }

  if (keyCode === ENTER) {

    mouse.velocityY = 2;

  }

}

/*
function bounceOff() {



}*/
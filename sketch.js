var wires,wallImg,Emergency,UploadWall,Tasks,downloadarrow,GarbageWall,WireWall,
Garbage,upload,download,imposter,blue,white,green,sprite,wires;

function preload(){
  wires = loadImage("Wires.png");
  wallImg=loadImage("Map.png");
  Emergency=loadImage("emergency button.png");
  UploadWall=loadImage("UPLOAD wall.png");
  Tasks=loadImage("Task0.png");
  downloadarrow=loadImage("download arrow.png");
  GarbageWall=loadImage("garbage wall.png");
  WireWall=loadImage("wirewall.png");
  Garbage=loadImage("garbage task.png");
  upload=loadImage("upload.png");
  download=loadImage("download.png");
  imposter=loadImage("Imposter.png");
  blue=loadImage("Blue.png");
  white=loadImage("White.png");
  green=loadImage("Green.png");
  sprite=loadImage("ChacterFront (red).png");
  wires=loadImage("wires 2.png");
}

function setup() {
  createCanvas(400,400);

  var wall = createSprite(200, 200);
  wall.addImage(wallImg);
var wires = createSprite(200, 200);
var downloadarrow = createSprite(40, 30);
var Emergency = createSprite(200, 350);
var WireWall = createSprite(30, 372);
var download = createSprite(22, 19);
var Garbage = createSprite(372, 9);
var GarbageWall = createSprite(372, 9);
var sprite = createSprite(200, 200);
var upload = createSprite(374, 382);
var wires = createSprite(30, 372);
var blue = createSprite(58, 123);
var white = createSprite(352, 270);
var green = createSprite(200, 340);
var imposter = createSprite(65, 192);
var Tasks = createSprite(198, 79);
var UploadWall = createSprite(374, 382);

}

function draw() {
  background(255,255,255);  
  drawSprites();
}
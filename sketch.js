var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,200);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  
  if(wall.x - car.x<car.width/2 + wall.width/2) {
      Deformation = 0.5 * weight * speed * speed/22500;
      if(Deformation<100) {
        car.shapeColor = "green";
      }
      if(Deformation>100 && Deformation < 180) {
        car.shapeColor = "yellow";
      }
      if(Deformation>180) {
        car.shapeColor = "red";
      }
  }

  drawSprites();
}
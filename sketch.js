var car, wall;
var speed, weight;
var deformation;
var carImage;

function preload(){
carImage=loadImage("GreenCar.png");
RedCarImage=loadImage("RedCar.jpg");
YellowCarImage=loadImage("YellowCar.jpg");
}

function setup() {
  createCanvas(1200, 400);

  //choosing random spped and weight of the car
  speed= random(55,90);
  weight=random(400,1500)

  //car 
  car=createSprite(50, 200, 30, 30);
  
  //move the car
  car.velocityX=speed;
  console.log(car.width)
  car.addImage(carImage);
  car.scale=0.2;
  car.setCollider("circle",0,0,150)
  //car.debug=true;
  //wall
  wall=createSprite(1100,200,60,400);
  wall.shapeColor="brown"
  //wall.debug=true    
      

}

function draw() {
  background(245);
  drawSprites();
  fill ("black");
  textSize(9);
  text("@Global Car Safety Organisation(GSCO)   ", 900,390) 
  fill("orange")
  textSize(12)
  text("Speed :"+Math.round(speed), 900,40)   
  if(abs(wall.x-car.x)<(100+ wall.width/2)){
    //calculate deformation amount of the car
    deformation=Math.round((0.5*weight*speed*speed)/22500);    
    car.velocityX=0;
    //car.x=1460;
    if(deformation<80){
      car.shapeColor="green";
      car.addImage(carImage);
      car.scale=0.2;
      car.setCollider("circle",0,0,200)
     // stroke (0);
      fill ("green");
      textSize(12);
      text("Deformation : "+deformation, 900,70)    
      text("Deformation Type:GOOD ", 900,100)
    }
    else if(deformation>=80 && deformation<=180){
      car.shapeColor="yellow";
      car.addImage(YellowCarImage)
      car.scale=0.6;
      car.setCollider("circle",0,0,50)
      //stroke (0);
      fill ("yellow")
      textSize(12);
      text("Deformation : "+deformation, 900,70)
      text("Deformation Type:AVERAGE ", 900,100)
    }
    else if(deformation>=180){
      car.shapeColor="red";
      car.addImage(RedCarImage)
      car.scale=0.6;
      car.setCollider("circle",0,0,50)
      //stroke (0);
      fill ("red")
      textSize(12);
      text("Deformation : "+deformation, 900,70)
      text("Deformation Type:LETHAL ", 900,100)
    }
    else{
      car.shapeColor="white";
      car.addImage(carImage);
      car.scale=0.2;
      fill ("white")
      textSize(15);
      text("Deformation : "+0, 900,70)
      text("Deformation Type:NO DEFORMATION ", 900,100)
    }
  }
  
  
}
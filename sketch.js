var moving, fixed; 
var car1, car2;
var bus1, bus2;

function setup() 
{ 
    createCanvas(1200,600); 
    moving=createSprite(300,300,60,100); 
    fixed=createSprite(600,300,100,60); 
    moving.shapeColor="green"; 
    fixed.shapeColor="green"; 

    car1=createSprite(200,100,50,50);
    car1.shapeColor="pink";
    car1.velocityX=5;

    car2=createSprite(1100,100,50,50);
    car2.shapeColor="orange";
    car2.velocityX=-5;

    bus1=createSprite(300,100,50,50)
    bus1.shapeColor="yellow";
    bus1.velocityY=5;

    bus2=createSprite(300,500,50,50);
    bus2.shapeColor="blue";
    bus2.velocityY=-5;
} 
    
    function draw() 
    { 
        background(0); 
        moving.x=mouseX; 
        moving.y=mouseY; 
        
        if (istouch(moving, fixed))
        {
          fixed.shapeColor="red"; 
          moving.shapeColor="red"; 
        }
          else
        {
          fixed.shapeColor="green"; 
          moving.shapeColor="green"; 

        }

        bounceoff(car1, car2);
        bounceoff(bus1, bus2);
        

          
              
             drawSprites(); }
     
      
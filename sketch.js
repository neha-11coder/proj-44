var gameState=0;
var score=0;
var name,hunter;
var title,input,button;
function setup() {
  createCanvas(windowWidth,windowHeight);
  hunter=createSprite(width/2,height-25, 50, 50);
  wildGroup=new Group();

}

function draw() {
  background("blue"); 
  textSize(30);
  fill ("yellow")
  text("Score : "+score,0,60);
  title=createElement('h1');
  title.html("Rescue The Wild");
  title.position(width/2-50,10)
  
  
  if(gameState===0){
    hunter.visible=false;
    text("Click On Play To Start",width/2-100,height/3);
    input=createInput('Name');
    input.position(width/2-50,height/2.5)
    button=createButton('Play');
    button.class("customButton");
    button.position(width/2,height/2);
    button.mousePressed(()=>{
      //document.getElementById("input").style.display = "none";
      //button.hide();
      name=input.value();
      gameState=1;
    })

    

  }
  else if(gameState===1){
    hunter.visible=true;
    text("Name: "+ name,0,30);
    wAnimals();
    if(keyDown(UP_ARROW)){
      hunter.y=hunter.y-5;
    }else if(keyDown(RIGHT_ARROW)){
      hunter.x=hunter.x+5
    }
  }
  if(keyDown(DOWN_ARROW)){
    hunter.y=hunter.y+5
  }else if(keyDown(LEFT_ARROW)){
    hunter.x=hunter.x-5
  }
  

  drawSprites();
}
function wAnimals(){
  if(frameCount%60===0){
    var wild=createSprite(random(0,width),0,10,10);
    wild.velocityY=6;
    wild.lifetime=300;
    wildGroup.add(wild);

  }
}
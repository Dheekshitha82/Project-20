var background, backgroundImage
var cat, catRunning
var mouse, mouseImage

function preload() {
    //load the images here
    backgroundImage = loadImage("garden.png")
    cat.loadAnimation("tomOne.png", "tomTwo.png", "tomThree.png", "tomFour.png")

}

function setup(){
    createCanvas(1000,800);
    background = createSprite(0, 100, 400, 400);
    background.addImage(backgroundImage)    
    //create tom and jerry sprites here
    cat = createSprite(50, 50)
    text(mouseX + ',' + mouseY, 10, 45)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

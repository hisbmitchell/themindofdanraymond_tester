//idea: randmoly trigger 'invest', 
//randomly background starts/stops updating
//dfferent pages

//html5 visible tag
var manImg1, manImg2;
var manImgs = [];
var investMen = [];
var manInvest;
var current;
var manImg;
var bool = true;


function preload() {

  manImg1 = loadImage('assets/invest0.png');
  manImg2 = loadImage('assets/invest2.png');
  bg = loadImage('assets/2draw.jpg');

  grow = createVideo('assets/zoom_1.mp4');

  grow.loop();
  grow.hide();
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(15);
   manImg = manImg2
  //image(bg, 50, 200);

  // for (var i=0;i<numMen;i++) {
  //   var xPos=mouseX;
  //   var yPos=mouseY;
  //   investMen[i] = new investMan(xPos,yPos , manImg1, manImg2);
  //   }

}

function keyPressed(){
  if (keyCode === ENTER) {
    //background(255);
      for (i = 0; i <= investMen.length; i++) {
    
    investMen[i].clear();
      }
}
}

function mousePressed() {




  if (bool === true) {

    manImg = manImg1;

    bool = false;
    
    println("cool!");
    
  } else {
    println("notcool...");
    
    manImg = manImg2;

    bool = true;
  }

}






function draw() {
  imageMode(CENTER);
  background(255);
  text('press ENTER',50,50);
  text('CLICK YOUR MOUSE', 50, 70);
  //println ('mousex:'+mouseX+'mouseY:'+mouseY);


  var xPos = mouseX;
  var yPos = mouseY;
  investMen.push(new investMan(xPos, yPos, manImg));




  if (mouseX > 900 && mouseY > 100) {

    image(grow, width / 2, height / 2);
    grow.play();

  } else if (mouseX < 100 && mouseY > 100) {
    //background(255);
    grow.pause();
    image(bg, 500, 200);
  }






  //bgY += 1;
  // bgX += 0.5;
  // if (bgX >= width){
  //   println('too big!!')
  //   bgX = -100;
  // }
  //background(255);

  for (i = 0; i < investMen.length; i++) {
    //investMen[i].update();
    investMen[i].display();
    //image(manImg1, 110, 110);
  }
}

function investMan(x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;

  // this.bool = true;

  this.update = function() {
    this.x = mouseX;
    this.y = mouseY;
  }
  
  this.clear = function() {
    for (i = 0; i < investMen.length;i++){
      investMen.pop(investMen[i]);
    }
  }



  this.display = function() {
    imageMode(CENTER)
    image(this.img, this.x, this.y);
    
  }

  // this.clicked = function() {

  //   println("cool!");


  //   if (this.bool == true) {

  //     this.img = this.img1;

  //     this.bool = false;
  //   } else {
  //     println("notcool...");
  //     this.img = this.img2;

  //     this.bool = true;
  //   }
  // }
}
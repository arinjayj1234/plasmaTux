var sizeh = 400;
var sizew = 300;
noseX = 0;
noseY = 0;

function preload(){
  chad = loadImage("https://i.postimg.cc/fRBJdSHX/chad.png");
}

function setup(){
  canvas = createCanvas(sizeh, sizew);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(sizeh, sizew);
  video.hide();  

  sirWtses = ml5.poseNet(video, iGoor);
  sirWtses.on('pose', wsotGe);
}

function wsotGe(results){
  if (results.length > 0){
    noseX = results[0].pose.nose.x - 20;
    noseY = results[0].pose.nose.y - 20;

    console.log(results);
    console.log("X=hmm now how will you access it "+noseX);
    console.log("Y=What happened hmm "+noseY);    
  }
}

function iGoor(){
  console.log("You can just say that PoseNet is initialized. (Yeah, Okay great okay; What is this?; I forgot, yeah; Why do you keep on adding I don't understand this;)");
}

function draw(){
  image(video, 0, 0, sizeh, sizew);
  // Hmm
  //fill(0,128,85);
  //stroke(0,77,64);
  //circle(noseX, noseY, 40);

  image(chad, noseX, noseY, 40, 40);
}

function takeSnapshot(){
  save("funnyPic.png");
}

let posenet;
let video;
let poses = [];
function preload(){

}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();

  posenet = ml5.poseNet(video,modelReady);
  
}

function modelReady(){
  posenet.on('pose', (results) => {
    poses = results;
  });
}

function draw() {
  background(220);

  image(video, 0,0, width, height);
  drawNose();
}

function drawNose(){
  if(poses.length > 0){
    const nose = poses[0].pose.nose;
    ellipse(nose.x, nose.y, 30, 30);
  }
  
}
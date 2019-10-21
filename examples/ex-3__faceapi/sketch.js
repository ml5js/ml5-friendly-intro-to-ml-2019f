let faceapi;
let video;
let detections = [];
const detection_options = {
  withLandmarks: true,
  withDescriptors: false,
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();

  faceapi = ml5.faceApi(video, detection_options, modelReady);
}

function modelReady(){
  detect();
}

function detect(){
  faceapi.detect(gotDetections)
}

function gotDetections(err, results){
  if(err) return;
  detections = results;
  detect();
}

function draw() {
  background(220);

  image(video, 0,0, width, height);
  drawBox(detections);
  drawLandmarks(detections)
}

function drawBox(detections){
  detections.forEach( detection => {
    const alignedRect = detection.alignedRect;
    const x = alignedRect._box._x
    const y = alignedRect._box._y
    const boxWidth = alignedRect._box._width
    const boxHeight  = alignedRect._box._height
    noFill();
    stroke(161, 95, 251);
    strokeWeight(2);
    rect(x, y, boxWidth, boxHeight);
  })  
}


function drawLandmarks(detections){
  detections.forEach( detection => {
    drawPart(detection.parts.mouth, false);
  })
}

function drawPart(feature, open = false){
    stroke(161, 95, 251);
    strokeWeight(2);
    beginShape();
    feature.forEach( item => {
      const x = item._x
      const y = item._y
      vertex(x, y)
    })
    
    if(open === true){
        endShape();
    } else {
        endShape(CLOSE);
    }
    
}
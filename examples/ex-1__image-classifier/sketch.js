
let classifier;
let video;
let outputText;
function preload(){
  classifier = ml5.imageClassifier('Mobilenet');
}

function setup() {
  createCanvas(640, 480);
  outputText = createP('I see...');

  video = createCapture(VIDEO);
  video.hide();

  classify();
}

function draw() {
  background(220);
  image(video, 0,0, width, height);
}

function classify(){
  classifier.classify(video, gotResults)
}

function gotResults(err, results){
  if(err){
    return;
  }
  const output = results[0];
  outputText.html(`I see a ${output.label}. I am ${nf(output.confidence, 3, 4) * 100.0}% confident.`)

  classify()
}
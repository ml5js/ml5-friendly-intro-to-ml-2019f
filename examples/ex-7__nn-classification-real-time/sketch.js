let neuralnet;
let label = "A";
let selection;
let trainBtn;
let outputText;

let options = {
  inputs:['x', 'y'],
  outputs: ['label'],
  task:'classification',
  debug:true,
}

let canvas;
function setup() {
  canvas = createCanvas(400, 400);
  

  neuralnet = ml5.neuralNetwork(options);
  selection = select("#selectInput");
  trainBtn = select("#trainButton");

  label = selection.value();
  selection.changed(function(){
    label = selection.value();
  })
  outputText = createP('I guess...')

  canvas.mousePressed(addData);

  trainBtn.mousePressed(trainModel)
  background(220);
}

function trainModel(){
  neuralnet.normalizeData();
  neuralnet.train({epochs: 30, batchSize:20}, doneTraining)
}

function doneTraining(){
  classify();
}

function classify(){
  neuralnet.classify({x: mouseX, y: mouseY}, gotResults);
}

function gotResults(err, results){
  if(err){
    console.log(err);
    return;
  };

  outputText.html(`${results[0].label}`);

  classify();
  
}


function addData(){
  const trainingX = {x: mouseX, y: mouseY}
  const trainingY = {label: label}
  neuralnet.addData(trainingX, trainingY);

  ellipse(mouseX, mouseY, 40, 40);
  text(label, mouseX, mouseY);
}





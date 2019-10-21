
let neuralnet;
let options = {
  dataUrl:'data/colorData.json',
  inputs: ['r', 'g', 'b'],
  outputs: ['label'],
  task:'classification',
  debug: true
}

let resultP;

let rSlider, gSlider, bSlider;

function setup() {
  createCanvas(400, 400);
  resultP = createP('I predict...')

  rSlider = createSlider(0, 255, 255)
  gSlider = createSlider(0, 255, 0)
  bSlider= createSlider(0, 255, 0)

  neuralnet = ml5.neuralNetwork(options, dataLoaded)
}

function dataLoaded(){
  neuralnet.normalizeData();

  const trainingOptions = {
    epochs: 24,
    batchSize: 32
  }
  neuralnet.train(trainingOptions, doneTraining);

}

function doneTraining(){
  predict()
}

function predict(){
  const r = rSlider.value()
  const g = gSlider.value()
  const b = bSlider.value()

  background(r, g, b);
  neuralnet.predict({r, g, b}, gotResult)

}

function gotResult(err, result){
  if(err) return;
  
  resultP.html(result[0].label);
  predict();
}

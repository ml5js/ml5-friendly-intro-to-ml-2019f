
let neuralnet;
let options = {
  dataUrl:'data/co2stats.csv',
  inputs: ['population_cdp'],
  outputs: ['scope1_ghg_emissions_tons_co2e'],
  task:'regression',
  debug: true
}

function setup() {
  createCanvas(400, 400);

  neuralnet = ml5.neuralNetwork(options, dataLoaded)
}

function dataLoaded(){
  neuralnet.normalizeData();
  const trainingOptions = {
    epochs: 50,
    batchSize: 16
  }
  neuralnet.train(trainingOptions, doneTraining);

  // drawData()
}

function doneTraining(){
  predict(1000);
  predict(10000);
  predict(100000);
  predict(1000000);
}

function predict(value){
  neuralnet.predict([value], gotResult)
}

function gotResult(err, result){
  if(err) return;
  
  createP(result[0].value)
}

function drawData() {
  neuralnet.data.data.raw.forEach(item => {
    const x = map(item.xs.population_cdp, neuralnet.data.data.inputMin, neuralnet.data.data.inputMax, 0, width);
    const y = map(item.ys.scope1_ghg_emissions_tons_co2e, neuralnet.data.data.outputMin, neuralnet.data.data.outputMax, height, 0);
    ellipse(x, y, 4, 4);
  })
}
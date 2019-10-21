let sentiment;
let inputText = `really happy`

function setup() {
  createCanvas(400, 400);
  sentiment = ml5.sentiment('movieReviews', modelReady);

}

function modelReady(){
  const prediction = sentiment.predict(inputText);
  alert(`The score is: ${prediction.score}`)
}

// function draw() {
//   background(220);
// }
let history;
let count = 0;

function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight);
  let url = "chrome_history.json";
  loadJSON(url, loaded);
  background(0);
  fill(255);
  textSize(20)
  textAlign(CENTER, CENTER);
  frameRate(1);
}
function draw() {

  background(0);
  // put drawing code here
  text(history[count].title, width / 2, height / 2);
  count++;
  if (count > Object.keys(history).length) {
      count = 0;
  }
}
function loaded(data) {
  history = data;
  console.log(history[0].title);

  let aktuellestunde=15;
  let deckungsgrad = map(aktuellestunde, 0, 23, 0, 255)
}

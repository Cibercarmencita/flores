let bubbles = [];
let img, img01;

function preload() {
  img = loadImage('images/01.png');
  img01 = loadImage('images/02.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight);//createCanvas(600, 600);
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mouseDragged() {
  let r = 100;
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].mover();
    bubbles[i].mostrar();
  }
  if (bubbles.length > 50) {
    bubbles.splice(0, 1);
  }
}
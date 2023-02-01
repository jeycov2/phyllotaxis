var n = 0;
var c = 6;

var points = [];

var start = 0; //para la variación de colores



let vel = 0.03; // velocidad de rotacion


function mouseWheel() {
  g = g + 10;
  print (g);
  }


function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  colorMode(HSB);
  
}

function draw() {
  background(255);

  createCanvas(500, 500);
  translate(width / 2, height / 2);



  rotate(n *vel);
  
  
 
  for (let i = 0; i < n; i++) {

    var a = i * 137.9;
    var r = c * sqrt(i);
    var x = r * cos(a);
    var y = r * sin(a);
        //ecucación de philotaxis
    var hu = sin(start + i * 0.5);
    //Mapeo de colore
    hu = map(hu, -1, 1, 0, 360);
    
    fill(255, hu, 255);
    noStroke();
    ellipse(x, y, c+1, c+1);
    
    
    // triangle(x, y, 500, 100, 122, 0);

  }
  
  n += 5;
  start += 0.01;
}


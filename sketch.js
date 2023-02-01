var n = 0;
var c = 6;


let xborde = 1000;
let yborde = 1000;

var points = [];

var start = 0; //para la variación de colores


let velr = 0.03; // velocidad de rotacion
let mouseR;

function setup() {
 mouseR = createCanvas(1080, 1080);
  angleMode(DEGREES);
  colorMode(HSB);
  
  mouseR.mouseWheel(velrotacion);
  
}

function draw() {
  background(2);

  createCanvas(xborde, yborde);
  translate(width / 2, height / 2);


//Para la rotación
  rotate(n *velr);
  if (velr < 0){
rotate ('stop')
    
  }if (velr > 0){
    rotate ('false')
        
      }
      
  
 
  for (let i = 0; i < n; i++) {
    // if (i > xborde){
    //  n ('false')

    // }
    // if (i > yborde){
    //   n ('false')
 
    //  }


    var a = i *  137.5;
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


//Controla la velocidad de rotación
function velrotacion (event) {

  if (event.deltaY > 0){
  velr = velr - 0.01;

} else {
  velr = velr +0.01;
}
print (velr);

}

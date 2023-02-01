var n = 200;
var c = 6;


let xborde = 1000;
let yborde = 1000;

var points = [];

var start = 0; //para la variación de colores


let velr = 0.03; // velocidad de rotacion
let mouseR;

function setup() {
 mouseR = createCanvas(xborde, yborde);
  angleMode(DEGREES);
  colorMode(HSB);
// control de frames
  frameRate (30);
  
  mouseR.mouseWheel(velrotacion);
  
}

function draw() {
  // background(255);

  createCanvas(1000, 600);
  translate(width / 2, height / 2);


//Para la rotación
  rotate(n *velr);

      
  
 
  for (let i = 0; i < n; i++) {
    

//angulos y raiz
    var a = i *  137.9;
    var r = c * sqrt(i);

// controladores de movimiento en x y
    var x1 = r * cos(a);
    var y1 = r * sin(a);


    var x2 = r * cos(i);
    var y2 = r * sin(i);
  
        //ecucación de philotaxis
    var hu = sin(start + i * 0.5);


    //Mapeo de colores
    hu = map(hu, -1, 1, 0, 360);
    
    fill(255, hu, 255);
    noStroke();
    ellipse(x1, y1, c+1, c+1);

    
    
   

  }
  
  n += 5;
  start += 1;
}


//Controla la velocidad de rotación
function velrotacion (event) {
//variacion de velocidad
  if (event.deltaY > 0){
  velr = velr - 0.1;

} else {
  velr = velr +0.1;
}
print (velr);

}

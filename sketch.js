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
  background(225);

  createCanvas(1000, 700);
  translate(width / 2, height / 2);


//Para la rotación con el mouse
  rotate(n *velr);

      
  
 
  for (let i = 0; i < n; i++) {
    

//angulos y raiz
    var a = i *  137.5;
    var r = c * sqrt(i);

// controladores de movimiento en x y
    var x1 = r * cos(a);
    var y1 = r * sin(a);

    var xv = r * cos((i + 0.5)*137.5);
    var yv = r * sin((i + 0.5)*137.5);

  


        //ecucación de philotaxis
    var hu = sin(start + i * 0.5);


    //Mapeo de colores
    hu = map(hu, -1, 1, 0, 360);
    
    fill(255, hu+2, 255);
    noStroke();
    ellipse(x1, y1, c+0.1, c+0.1);

let x= lerp(x1,xv, 1);
let y= lerp(y1,yv, 1);


    fill(hu, hu *a, 255,1);
    noStroke();
    ellipse(x, y, 5, 5);

    
  
    
  

  }
  
  n += 0.01;
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

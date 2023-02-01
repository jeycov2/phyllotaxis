var n = 200;
var c = 6;


let xborde = 1000;
let yborde = 700;

var points = [];

var start = 0; //para la variación de colores


let velr = 0.03; // incremento de velocidad
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
  background(225,0,225,0.1);

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

//controladores de movimiento en x y variables
    var xv = r * cos((i + 0.5)*137.9);
    var yv = r * sin((i + 0.5)*137.9);

  


        //ecucación de philotaxis
    var hu = sin(start + i * 0.5);


    //Mapeo de colores
    hu = map(hu, -1, 1, 0, 360);
    
    fill(25, hu+2, 100);
    noStroke();
    ellipse(x1, y1, c+0.1, c+0.1);
//incremento de x y y
let x= lerp(x1,xv-hu, 1);
let y= lerp(y1,yv-hu, 1);

//ovalos
    fill(r, hu *i, 255,0.2);
    noStroke();
    ellipse(x, y, 10, 10);

    
  
    
  

  }
  
  n += 0.3;
  start += 2;
}


//Controla la velocidad de rotación
function velrotacion (event) {
//variacion de velocidad
  if (event.deltaY > 0){
  velr = velr - 0.9;

} else {
  velr = velr +0.9;
}
print (velr);

}

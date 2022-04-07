var Lado=prompt("Por favor ingrese la medida del lado para hallar el área del cuadrado");
var areacuadrado=Lado**2;
console.log(areacuadrado);

var Volumen=prompt("por favor ingrese el lado del cubo para hallar el Volumen");
var areaVolumen=Volumen**3;
console.log(areaVolumen);

var base=prompt("por favor ingrese la base para hallar el area del rectangulo");
var AreaRectangulo=base*altura;
var altura=prompt("por favor ingrese la altura para hallar el area del rectangulo");
console.log(AreaRectangulo);
 

var l=prompt("por favor ingrese el valor del lado ");
var a=prompt("por favor ingrese el valor de la altura ");
var Perimetro=l+a+l+a;
console.log(Perimetro);

var Circulo=prompt("por favor ingrese el diametro del circulo");
var Radio=Circulo/2;
var AreaCirtulo=Math.PI*Radio**2;
console.log(AreaCirtulo);

var Volumen=4/2*Math.PI*Radio**2;
console.log(Volumen);

var base1=prompt("por favor ingrese el valor de base1");
var base2=prompt("por favor ingrese el valor de base2");
var h=prompt("por favor ingrese el valor de h");
console.log("el area de un trapezoide es: " +(h * (base1 + base2)/ 2)) //calificar la formula


var ancho;
var largo;
var profundo;
ancho=parseInt(("por favor ingresar el ancho"));
largo=parseInt(prompt("por favor ingresar el largo"));
profundo=parseInt(prompt("por favor ingrese la profundidad"));
console.log("la piscina se llena con ",(ancho * largo * profundo),"litros");


var alto=prompt("por favor ingrese el valor de alto");
var ancho=prompt("por favor ingrese el valor de Ancho");
var altoAncho = alto*ancho*22000;
console.log(altoAncho);

var cm;
var resultado;
cm = parseInt(prompt("Favor ingresar la longitud de centimetros que quieres convertir a kilometros"));
resultado = cm*(1/100)*(1/1000);
console.log("Los Centimetros han sido convertidos son " + resultado + "Km");

var dl; 
var resultado2;
dl = parseInt(prompt("Favor ingresar los decilitros que quieres convertir a litro"));
resultado2 = dl*(0.1/1.0);
console.log("Los Decilitros han sido convertidos son " + resultado2 + "L");

var mg;
var resultado3;
mg = parseInt(prompt("Favor ingresar los microgramos que quieres convertir a gramos"));
resultado3 = mg*(1.0/1000000);
console.log("Los Microgramos han sido convertidos son " + resultado3 + "G");

var kilo;
var resultado4;
kilo = parseInt(prompt("Favor ingresar los kilometros que quieres convertir a milimetros"));
kilo = prompt("Favor ingresar los kilometros que quieres convertir a milimetros");
resultado4 = kilo*1000000;
console.log("Los Kilometros han sido convertidos son " + resultado4 + " mm ");

console.log("hi");//do");//imprimir por consola


//comentario en linea
/*comentario
en
varias
lineas 
o
multilinea
*/


//variables
/*son espacios de memoria que almacenan datos o informacion 
existen varios tipos de variables en js, pero generalmente se utilizan los saiguientes:
string:almacena cadenas de textos. se debe declarar o asignar el valor entre "comillas"
int:almacena numeros enteros
double:almacena numeros reales
boolean:almacenan valores de verdad (true,false)
*/
/*declarar variables
declarar una variable es crearla,decirle al lenguaje como se llama la variable he indicarle que ya existe.
para declarar una variable se puede utilizar ya sea la palabra reservada var o let 
*/
var nombre;
console.log(nombre);
/*inicializar variables
para inicializar variables es necesario asiganar un valor cuando se crea esta variable
*/
var apellido="Higuchi";
console.log(apellido)
/*asignar un valor: asignar un valor se hace mediante el signo =, se debe hacer sobre una variable que ya fue declarada
*/
nombre="Sakae";
console.log(nombre+" "+apellido)


//desde otra  variable 
var edad=16;
var edadEstudiante=edad;
//desde el teclado 
var gradoEstudiante=prompt("ingrese un grado");
console.log("el grado es:"+gradoEstudiante);
/*constantes: son valores que una vez inicializados no pueden cambiar lo que almacenan. se crean con la palabra reservada const, el nombre de las constantes se describe todo en mayusculas para diferenciarlo de las variables
*/
const PI=3.1416;
//PT=5;
//imprimir por console 
//simple
console.log("mensaje");
console.log(nombre);
//concatenado
console.log("la edad es "+edad+" años");


//operadores
//suma 
let a = 10;
let b=20;
var suma= a+b;
console.log(suma);
//resta
var resultado;
resultado= a-b;
console.log(resultado);
resultado=a-b;
//multiplicacion 
var producto;
producto=a*b;
console.log(producto);










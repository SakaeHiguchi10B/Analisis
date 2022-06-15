console.log ("Punto 5");
var arreglo0=[]
var producto;
for( var i=1;i<=5;i++){
    producto=prompt("Por favor ingrese los articulos que desea comprar");
    arreglo0.push(producto);

} 

var arregloPrecio=[]
for (var i=0;i<arreglo0.length;i++){
     var precio=parseFloat(prompt("Por favor ingrese el precio de " +arreglo0[i]));
     arregloPrecio.push(precio);

}
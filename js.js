var palabra1= "Hola Gente";
var palabra2= "Estamos programando en JS";
var numero= 23;
var boleano= true;
var boleana= false;

if (window.console){

//muestro por pantalla

document.write ('<h1> Ejemplos de c&oacute;digo JS </h1>');
//muestro por consola
console.log="Este es un mensaje de consola";
console.error (palabra1);
console.warn (palabra2);
console.info (numero);
console.info (boleano);
console.error (boleana); 

//muestro por pantalla las variables

document.write ("la variable palabra uno vale: "+palabra1+"<br>");

document.write (" la varieable palabra dos vale: "+palabra2+"<br>");
document.write ("la variable numero vale: "+numero+"<br>");
document.write (" la variable boleano vale: "+boleano+" <br>");
document.write (" la vareable boleana vale: "+boleana+" <br>");

function inialert(){
	
	alert ("Esta es una ventana emergente");
	
}

alert ("ESTA ES OTRA VENTANA");

}
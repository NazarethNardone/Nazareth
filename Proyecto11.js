let diaSemana = prompt("¿Qué día es hoy?");
switch (diaSemana) {
case "lunes":

alert("Te toca Correr 5km");

break;
case "martes":

alert("Hacer 4 repeticiones de sentadillas");
    

break;
case "miércoles":

alert("Hacer 4 repeticiones de abdominales");
    

break;
case "jueves":

alert("Hacer 10 repeticiones de brazos");
    

break;
case "viernes":

alert("Correr 10km");

break;
case "sábado":

alert("Caminata rapida de 15km");
    

break;
case "domingo":

alert("Hacer 5 repeticiones estocadas");
    

break;
default:

alert("Escribe el día de la semana en minúsculas.");

}


//Este bucle se ejecutara 5 veces emepzando por 0 hasta llegar a 4.
//Modificalo para que el bucle se ejecuta de 20 a 70.

for(i=20;i<=70;i++){
document.write("El número es: " + i + "<br>");

}


//Realizar un bucle, donde el usuario pueda determinar la cantidad de veces que aparecerá
//el saludo ‘Hola Mundo’.
 let numero= prompt("Determine las veces que quiera q aparezca Hola Mundo");
 for(i=0;i<numero.length; i++) {
    console.log("Hola Mundo" + i + "<br>");

}


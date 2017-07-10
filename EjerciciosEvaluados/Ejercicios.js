//Ejercicio 1: si un numero es capicua o no
function esCapicua(numero){
  var reves=numero.toString().split("").reverse().join("");
  if(numero==reves){
    return numero + " Es Capicua" ;
  }else{
    return numero + " No es Capicua";
  }
}
esCapicua(2356532); //2356532 Es Capicua

//Ejercicio 2: potencia de un numero con una base
function potencia(n,m){
  return Math.pow(n,m);
}
potencia(2,3); //8 

//Ejercicio 3: Cuantas veces se repite un caracter en los elementos de un array
function cuentaCaracter(array,caracter){
  array = array.join("");
  var contador = 0;
  for(var i in array){
    if(array[i]==caracter){
      contador++;
    }
  }
  return contador
}
cuentaCaracter(["murcielago", "pato","caballo", "zebra"],"a") //5

//Ejericicio 4: numero de palabras en un string
function cuentaPalabras(string){
  return string.split(" ").length;
}
cuentaPalabras("Mi mama me mima") //4

//Ejercicio 5: tamaño d ela palabra mas larga de un array
function tamanoMasLargo(array){
 var largo=array.map(function(elemento){
   return elemento.length;
 });
 var ordena= largo.sort(function(a,b){
   return b-a
 });
 return ordena[0];
}
tamanoMasLargo(["tengo", "hambre", "parangatirihtm", "as"]); //14

//Ejercicio 6: cuenta cuantas vocales tiene una palabra
function cuentaVocales(array){
  array=array.join("").split("");
  var vocales="aeiouáéíóú";
  var cuenta = 0;
  for( var i in vocales){
    for( var j in array){
      if(vocales[i]==array[j].toLowerCase()){
        cuenta++;
      }
    }
  }
  return cuenta;
}
cuentaVocales(["hola","me","llamo","ale"]); //7

//Ejercicio 7: suma de numeros imares
function sumaImpares(n,m){
  var arrayImpar=[];
  for( var i=n; i<=m; i++){
    if(i%2 != 0){
      arrayImpar.push(i);
    }
  }
  return arrayImpar.reduce(function(a,b){
    return a+b;
  });
}
sumaImpares(3,7); //15


// dibuja en el documento dibuja al hombre segun los errores y retorna tambien la palabra al final, luego de pedir los 10 intentos
// todo lo hace en el prompt y en la consola.
function obtienerPalabraSecreta() {
  var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
  "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];

   var indice = Math.round ( Math.random() * 27 )
   var cadena = new String( libreriaPalabras[indice] )
   var palabra = cadena.split(" ")
  return palabra;
}

var hombre =  [        "____Este es Pepito",    
                       "P.....|.....",   
                       "E.....|.....",
                       "R.....|.....",
                       "D...(x_x)...",
                       "I..../|\\....",
                       "I..../ \\....",
                       "S....ya casi muere",
                       "T....super casi",
                       "E___ se murio... LO MATASTE...!!"];

var palabra = obtienerPalabraSecreta ();
console.log( palabra );
var asteriscos=[];
for(var i=0; i < palabra.length; i++){
  asteriscos.push("*");
}


function ahorcado(){
  var letra = "";
  var dibujo = "";
  var j = 0;
  var i = 0;
  var letrasIngresadas=[];
  var mensaje="";

  while( i < 10 ){
    
    letra = prompt("Ingrese una letra \nIntento: " + (i+1) + "/" + 10 + " \n " + "La palabra es: " + asteriscos.join(" ") + "\n" + mensaje +"\n" + dibujo);
    letra = letra.toLowerCase()
    var  n = palabra.indexOf(letra);
    var compara=[];
    var entro = false;
    letrasIngresadas.push(letra)
                           
    while( n != -1 ){
      entro = true
      asteriscos[n] = letra;
      palabra[n] = "*"
      n = palabra.indexOf(letra);
      mensaje = ( "Acertaste una letra mas..!" + "\n" + "Ya ingresate: " + letrasIngresadas.join(" ") )
      console.log( "Acertaste una mas... ya casi lo logras" + "\n" + asteriscos.join(" ") + "\n" + "No mates a Pepito" + dibujo )  
    }
    
    if( entro == false ){
      dibujo += (hombre[j++] + "\n");
      mensaje = ("Oh no te equivocaste, cada vez menos oportunidades" + "\n" + "Ya ingresate: " + letrasIngresadas.join(" ") );
      console.log( "\n" + "Intento " + (i+1) + "         " + asteriscos.join(" ") + "\n" + dibujo );
      i++;
    } 
       
    compara = asteriscos.indexOf("*");
    if( compara == -1){
      alert( "GANASTE...!  Salvaste a Pepito" );
      document.write( "GANASTE...!  Salvaste a Pepito" )
      break;
    }
  }
  
  if( asteriscos.indexOf("*") != -1 ){
    alert( "Perdiste....!!!!! Mataste a Pepito" );
    document.write( "Perdiste....!!!!! Mataste a Pepito" );
  }
}

ahorcado();

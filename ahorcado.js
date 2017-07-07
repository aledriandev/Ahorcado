// dibuja en el documento dibuja al hombre segun los errores y retorna tambien la palabra al final, luego de pedir los 10 intentos

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

var hombre =  [        "______",    
                       ".....|.....",   
                       ".....|.....",
                       ".....|.....",
                       "..(x_x)..",
                       "..../|\\....",
                       "..../ \\....",
                       "...........",
                       "...........",
                       "______"];

var palabra = obtienerPalabraSecreta ();
console.log(palabra);

//funcion principal
function ahorcado(){
  var letra="";
  var largo = palabra.length;
  var comparando=[];
  var dibujo="";
  var palab="";
  var j = 0;
  var i = 0;
  do{
    letra = prompt("Ingrese una letra \nIntento: " +(i+1)+"/"+10 );
    comparando=compara1(letra);
    if(comparando.indexOf(letra)==-1){
      dibujo+=(hombre[j++] +"<br>");
    }
    if(comparando.indexOf(letra)!=-1){
      palab+=("<br>"+comparando+"<br>");
    }
    i++;
  }while( i<10 );
  return (dibujo+"<br>"+palab);
}

//array de asteriscos de acuerdo al tamaño de la palabra
var asteriscos=[];
for(var i=0; i<palabra.length; i++){
    asteriscos.push("*");
}

//compara cada elemento del array con la letra segun la posicion
function compara1(letra){
  var  n=palabra.indexOf(letra)
  for(;n!==-1;){
    asteriscos[n]=letra;
    palabra[n]="*"
    n=palabra.indexOf(letra);  
  }
  return asteriscos;
}
document.write(ahorcado());
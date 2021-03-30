function somme(a, b) {
  console.log(a + b);
}

console.log(somme(5, 10)); //undefined ne retourne retourne p  s de valeur

function somme2(a, b) {
  return a + b;
}
console.log(somme2(5, 10)); //15
//Le mot clé return renvoie le résultat a+b
//5 et 10 sont les arguments passés a la fonction appelée
//a et b sont les parametres de la definition de la fonction somme et sont locales

//On passe un argument
console.log(somme3(15)); //NaN
//js affecte a b=undefined et 15+undefined=NaN

function somme3(a, b) {
  if (b == undefined) {
      b=0
  }
  return a + b;
}
console.log(somme3(5))//5

//Autre définition d'une fonction en js
var s1=function(a,b){return a+b}
console.log(s1(12,13))

//apeel et ensuite declaration

//Methode var
//console.log(s2(12,13))// Erreur is not a function
var s2=function(a,b){return a+b}

//Methode normal
console.log(s3(33,13))// 
function s3 (a,b){return a+b}
//On a definit la fonction apres l'appel
//En effet js scrute le code et toutes les definitions des fonctions sont mis en haut
//hoisting des fonctions
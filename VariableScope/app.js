// Les variables

//maVariable //Erreur is not defined car non déclaré
var maVar //undefined
maVar=null 

maVar=12//12        
maVar=12.5//12.5
maVar=12,1//12
maVar="Bonjour"//Bonjour
maVar='Bon'//Bon
3+"" //"3"
3+"4"//"34" + concatenation et convertit 3 en chaine "3" 
3*"4"//12
"14"-"4"//10
"mot"*4//NaN not a number
"12mot"*4//NaN
varb=true//booleen true
c=false//booleen false
7>42//false
7>"3"//true
"15">"10"//true comparaison ordre alphabetique compare lettre "1"== lettre "1"  lettre "5"> lettre "0"
"2">"1qgth"//true lettre "2" > lettre "1"
"2q">"2t"//false car t>q
//------------------------------------------------------------------------
//Tableaux
var nom=["joe","jim","cindy"]
nom[0]//loe
nom.length//3
nom[5]//undefined

//------------------------------------------------------------------------
//Objets
var eleve={
    joe:12,
    bob:23,
    t:this.toto //undefined this fait ref a l'objet Window
}

eleve.joe//12
eleve["joe"]//12
//on peut y mettre des tableaux methodes et d'audres objets
eleve.taille//undefined

//------------------------------------------------------------------------

typeof null;           // "object" (pas null pour des raisons historiques)
typeof undefined;      // "undefined"
null === undefined;    // false
null  == undefined;    // true
null === null;         // true
null  == null;         // true
!null;                 // true
isNaN(1 + null);       // false
isNaN(1 + undefined);  // true

//------------------------------------------------------------------------
//Les fonctions

function afficher() {
    console.log("Une fonction")
}

afficher() //Affiche "Une fonction" dans la console
//et la fonction renvoie la valeur undefined

function diff(x,y) {
    return x-y
}

//console.clear(x);x is not defined
console.log("10 - 5 :" +diff(10,5))//5
console.log("10:" +diff(10))//NaN car 10-undefined
console.log(10-undefined)//NaN

function diff2(x,y) {
    if (x==undefined && y==undefined) {
        y=0  
        x=0 
    } else if(y==undefined){
        y=0
        
    }
    return x-y
}

console.log("diff2() "+diff2())//0
console.log("diff2(10) "+diff2(10))//10

//------------------------------------------------------------------------
//Portée des variables var

var demo=function(){
    var a='salut'
    console.log(a) //a=salut interieur de la fonction et supprimer dehors
    //a est local a la fonction demo
}
demo()
console.log(a)  //a is not defined a l'exterieur

//------------------------------------------------------------------------
var a="Le monde"
var demo=function(){
    var a='salut'
    console.log(a) //a="salut" car déclaré a l'interieur de la fonction
    //a est local a la fonction et est detruite
    //a la fin de la fonction
}
demo()
console.log(a)
//a vaut "Le monde" car c'est le a de var a='Le monde' ligne 69
//qui est global

//------------------------------------------------------------------------
//Les Closures
var a="Le monde"
var b='bonjour'
var demo=function(){
    var a='salut'
    console.log(b) /*
     Les fonctions ont acces aux variables
     exterieurs  sont des closures  
    */
}
demo()//Affiche bonjour la valeur de b
console.log(a)
//a vaut le monde car c'est le a de var a='Le monde'
//qui est global

//------------------------------------------------------------------------
//var n'est pas local aux blocks , aux accolades
for (var index = 0; index < 10; index++) {
    console.log(index) //0 a 9
       var t=10+index; 
       console.log(t)//10 a 19
}
console.log(index)//10
console.log(t)//19 a l'exterieur du bloc t existe

if (true) {
    var f="merci"
    console.log(f)
}
console.log(f)//merci
//idem pour while et do while 

var key=50
switch (key) {
    case 50:
        var g=100
        break;

    default:
        break;
}
console.log(g)//100

var j=0
var demo=function(){
    console.log(j)
}
for (j = 0; j < 10; j++) {
    demo()//0 a 9    
}
console.log(j)//10

//------------------------------------------------------------------------
//Le Hoisting (se hisser)
 
// console.log(a) //is not defined

//------------------------------------------------------------------------
console.log(d) //undefined
var d=50

/*Il prend toutes les declarations des variables
et les met au dessus

var d
console.log(d) //undefined
d=50*/

//------------------------------------------------------------------------
//hoisting fonction
var a=5
var b=3

console.log(somme(a,b))//53
console.log(prod(a,b))//15

function somme(a,b) {
    a=50 //Ici a=50 est le parametre de la fonction et ses parametres sont detruites a la fin
    return a+b
}

function prod(a,b) {
    return a*b
}

console.log(a) //5
console.log(b) //3


/*
console.log(somme(a,b))//53 revoie une valeur ????
Js cherche toute les definitions de fonction et les met
tout au debut et on a en fait :

function somme...
function prod...

var a=5
var b=3

console.log(somme(a,b)//53
console.log(prod(a,b))//15

console.log(a) //5
console.log(b) //3
*/

var a=5
var b=3

console.log(s)//undefined
//console.log(s(5,4))//is not a fonction

var s=function somme(a,b) {
    a=50 //parametre a et non pas a global
    return a+b
}
console.log(s(10,45))//95
console.log(a) //5
console.log(b) //3

/*Hoisting
var a=5
var b=3
var s
console.log(s)//undefined car s est declare mais n'a pas de valeur
console.log(s(5,4))//is not a function car la fonction n'existe pas ,elle existera juste apres ligne 209
s=function somme(a,b) {
    a=50 //parametre a et non pas la variable a global a la ligne 204
    return a+b
}
console.log(s(10,45))//95
console.log(a) //5
console.log(b) //3

*/

/********************THIS***************** */
var f=function(){
    console.log(this.toto) //this pointe sur objet Window et this.toto ->undefined
}

var joe={
    nom:'eponge',
    w:this, //this->Window
    n:this.nom,//this.nom->undefined
    f:function(){
        console.log(this) //this->joe
        var self=this//self->joe
        var t=function(){
            console.log('self dans t : '+self.nom) //self.nom->'eponge'
            console.log(this)//this->Window
        }
        t()
    }

}

console.log('Objet this :'+ this.this) //undefined


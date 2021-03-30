/**
 * Opérateur les plus courants
 */

//Opérateur d'affectation
/*
 *x=y
 *x+=y -> x=x+y
 *x-=y,x/=y,x*=y,x%=y
 *x++,x--
 */

//Opérateur de comparaison
/**
 * == égalité valeur
 * === égalité stricte valeur et type
 * != inégalité
 * !== inégalité stricte
 * >,<,>=,<=*  *
 * x/0 -> propriété globale Infinity
 * if(r === Infinity)...
 */

//Opérateur arithétique
/**
 * +,-,*,/
 * % reste de la division entiere
 * ++ increment de 1
 * -- decrement de 1*  *
 */

//Opérateur Logique
/**
 * && ET logique
 * || OU lofique
 * !  NON logique *
 */

//Opérateur de string
/**
 * + concaténation de chaine
 */

//Operateur conditionnel ternaire
/**
 * condition ? val1 : val2*
 * var statut = (âge >= 18) ? "adulte" : "mineur";
 *
 */

//Opérateur delete
/**
 * L'opérateur delete supprime un objet,
 * une propriété d'un objet
 * ou un élément d'un tableau à partir de sa position dans le tableau.
 *  La syntaxe de cet opérateur est la suivante :
 *
 * delete monObjet;
 * delete monObjet.propriété;
 * delete monObjet[index];delete propriété; // uniquement valide au sein d'une instruction with
 * delete propriété; // uniquement valide au sein d'une instruction with
 * delete propriété; // uniquement valide au sein d'une instruction with
 *
 * Tableau
 * var t=["bl","rg",50]
 * delete t[1] t[0]="b1"  t[2]=50
 * t[1] renvoie undefined mais n'existe pas ds la tableau
 * t[1] existe si t[1]=undefined
 *
 */

//typeof
/**
 * typeof opérande ou typeof (opérande)
 * var maFonction = new Function("5 + 2");
 * var forme = "round";
 * var taille = 1;
 * typeof maFonction; // renvoie "function"
 * typeof forme;      // renvoie "string"
 * typeof taille;     // renvoie "number"
 *
 */

//Opérateur relationnel in
/**
 * nomOuNumeroPropriete in monObjet
 *
 * vat t=["toto",50]
 * 0 in t renvoie true
 * "toto" in t renvoie false car se base sur indice et pas sur valeur
 * "length" in t renvoie true car propriete de l'objet Array t
 *
 * var maVoiture = {fabricant: "Honda", modèle: "Accord", year: 1998};
 * "fabricant" in maVoiture; // renvoie true
 * "modèle" in maVoiture;    // renvoie true
 *
 */

//Opérateur instanceof
/**
 *
 * nomObjet instanceof typeObjet
 *
 * var jour = new Date(2007, 01, 22);
 * if (jour instanceof Date) {
 *   // instructions à exécuter
 * }
 *
 */

/**
 * Condition
 * 
 *  if (condition1)
        instruction1
    else if (condition2)
        instruction2
    else if (condition3)
        instruction3
    ...
    else
         instructionN
 */


if(false){
  var portee="test"
  console.log(portee)
}
console.log(portee)//Si false portee=undefined sinon si vrai portee="test"

      

var a = 200;

if (a > 100) {
  console.log("a > 100");
  let b = "portée de let";
  const c = "portée de const";
  var d = "portée de var";
  console.log("Condition :" + b + " " + c + " " + d);
} else if (a > 25) {
  /*a > 25 et !( a>100 ) => a>25 et a<=100*/
  console.log("a>25 et a<=100 =>]25 100]");
} else if (a > 10) {
  /*a>10 et a<=25 et a<=100*/
  console.log("a>10 et a<=25 et a<=100 =>]10 25]");
} else {
  /*a<=10 et a<=25 et a<=100*/
  console.log("a<=10 et a<=25 et a<=100 =>a<=10");
}

//Pour a=200
//console.log('b= '+b)//Portée du bloc=> is not defined
//console.log('c= '+c)//Portée du bloc=> is not defined
console.log("d= " + d); //Si a > 200 d="portée de var sinon si a <=100 d=undefined"

var bl = new Boolean(false);
var ob = { nom: "joe" };
var ob1 = {};

//Ternaire (condition)? instruction si vrai: instruction si faux
console.log(ob1 ? "vrai" : "faux");
//null faux
//undefined faux
//NaN faux
//"" faux
//0 et -0 faux
//50 vrai
//new Boolean(false) vrai
//"bon" vrai
//[12,"5"] vrai
//[] vrai
//var ob={nom:"joe"} vrai
//var ob1={} vrai

var expr = "Oranges";

/**
 * Switch
 * Si une correspondance est trouvée, le programme exécutera les instructions associées
 * Si plusieurs cas de figure correspondent, le premier sera sélectionné
 */

switch (expr) {
  case "Oranges":
    let bs = "portée de let";
    const cs = "portée de const";
    var ds = "portée de var";
    console.log("Switch :" + bs + " " + cs + " " + ds);
    console.log("Oranges : 0.59 € le kilo.");
    break;
  case "Pommes":
    console.log("Pommes : 0.32 € le kilo.");
    break;
  case "Oranges":
    console.log("Oranges 2 : 0.7 € le kilo.");
    break;
  case "Cerises":
    console.log("Cerises : 3.00 € le kilo.");
    break;
  case "Mangues":
  case "Papayes":
    console.log("Mangues et papayes : 2.79 € le kilo.");
    break;
  default:
    console.log("Désolé, nous n'avons plus de " + expr + ".");
}

//Pour expr="Oranges"
//console.log('bs= '+bs)//Portée du bloc=> is not defined
//console.log('cs= '+cs)//Portée du bloc=> is not defined
//console.log("ds= " + ds); //Si expr="Oranges" d="portée de var sinon d=undefined"

/**************BOUCLE****************/

/**
 * while(condition){instruction}
 *
 * L'instruction while permet de créer une boucle
 * qui s'exécute tant qu'une condition de test est vérifiée.
 * La condition est évaluée avant d'exécuter l'instruction
 * contenue dans la boucle.
 */

let n = 0;

while (n < 3) {
  console.log("n= " + n);
  n++;
  console.log("n++= " + n);
}

console.log(n);
//3 Boucles n=0 a 2 et en sortie de boucle n vaut 3

//break

//L'instruction break permet de terminer la boucle en cours
let o = 0;

while (o < 6) {
  if (o === 3) {
    break;
  }
  o = o + 1;
}

console.log("break =" + o); //3 pour o==3 sort de la boucle et n'execute pas les instructions qui suivent

//continue
// L'instruction continue arrête l'exécution
//  des instructions pour l'itération de la boucle courante
//   ou de la boucle étiquetée. L'exécution est reprise à
//   l'itération suivante.

let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// expected output: "012456789 ici le 3 est sauté"

//Portée
let j = 0;

while (j < 3) {
  j++;
  if (j == 2) {
    let bw = "portée de let";
    const cw = "portée de const";
    var dw = "portée de var";
    console.log("While dans if :" + bw + " " + cw + " " + dw);
  }
  // console.log('While :'+bw+' '+cw+' '+dw) //bw et cw not defibed
  var dw = "changer dnas while";
}

//console.log('bw= '+bw)//Portée du bloc=> is not defined
//console.log('cw= '+cw)//Portée du bloc=> is not defined
console.log("dw= " + dw);

var t = 50;
console.log(t); //50
var t;
console.log(t); //50
//let t=14//t has been already declared

let u = 15;
//let u=24 has been already declared

/**
 * 
 * do
   instruction
   while (condition);
 * 
 * Une instruction exécutée au moins une fois
 * exécute une instruction jusqu'à ce qu'une condition de test ne soit plus vérifiée
 *  * 
 */

let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"

/**
 *
 * Boucle for
 *
 */

//initialise m et verifie condition
//instruction
//incremente

/*for (var m = 0; m < 5; m++) {
  console.log(m);
} //0 a 4

console.log(m); //5*/

/*
var m
for ( m = 0; m < 5; m++) {
  console.log(m);
} //0 a 4

console.log(m); //5
*/

/*for (var m = 8; m > 3; m-=2) {
  console.log(m);
} //0 a 4

console.log(m); //5*/


//Portée des variables
for (let m = 0; m < 5; m++) {
  console.log(m);
  let ford=50//A chaque boucle ford est crée et detruit
} //0 a 4

//console.log(ford);//is not defined

//Boucle for ..in (Eviter les tableau objet de type Array et préférer le for)

var peugeot={
  vitesse:130,
  couleur:'gris',
  cv:5
}

for (var element in peugeot) {
  console.log('element = '+element+'typeof= '+typeof(element))
}//liste les propriétés vitesse couleur et cv


//Boucle for ..of
/**
 
L'instruction for...of permet de créer une boucle Array 
qui parcourt un objet itérable 
(ce qui inclut les objets Array, Map, Set, String, TypedArray, 
l'objet arguments

 */

var jean=['Dupont',25,'Ingénieur'] 

for (var element of jean) {
  console.log('element = '+element+'typeof= '+typeof(element))

}//liste des valeurs 'Dupont' 25 'Ingenieur'


//map()

/*
La méthode map() crée un nouveau tableau avec les résultats de l'appel 
d'une fonction fournie sur chaque élément du tableau appelant.
*/

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]




 
(function () {



/*-------------------alert prompt confirm----------------------*/  
    //Fonction alert
    // var r=80  
    // window.alert("bonjour")//Bloque execution du script
    // //et tout ce qui est apres n'est pas executer
    // //uniquement lorsqu'on ferme la fenetre alert
    // console.log(r)

    //Fonction prompt
    // var saisi=window.prompt("Saisissez une valeur")
    // console.log(saisi)
    
    //Fonction confirm
    // var rep=window.confirm("Confirmer")
    // console.log(rep)//ok->true et annuler->false

    //Exercice Deviner le chiffre (10 min 50 video grafikart)
    //Deviner un chiffre entre 0 et 10 voir dossier Exo_Deviner

    //chiffreDeviner=Math.round(Math.random()*10)     

})()//Toujours en haut de la page sinon
//erreur

 /*-------------------DOM----------------------*/  

console.log(document.body)
//<body>...<body/>

console.log(document.html)
//<html>...<html/>

console.log(document.head)
//<head>...<head/>

console.log(document.scripts)
console.log("url",document.url)
console.log("cookie",document.cookie)
console.log("title",document.title)
console.log("links",document.links)
/**
HTMLCollection(2) [a.cl, a]
0: a.cl
1: a
length: 2
 */

/*--------------Accéder aux éléments du DOM-----------*/

////Par Id

console.log(document.getElementById('childUl'))
/*
<ul id="childUl">
    <li><a href="">Lien li</a></li>
    <li class="cl"> <span class="cl">Span li</span></li>
</ul>
*/
console.log(document.getElementById('toto'))//null
/*********************************************** */

////Par class 

//récupère tous les .cl asc et desc
//Dans un tableau HTMLCollection
console.log(document.getElementsByClassName('cl'))
/*
HTMLCollection(5) [div.cl, a.cl, li.cl, span.cl, div.cl]
0: div.cl
1: a.cl
2: li.cl
3: span.cl
4: div.cl
length: 5
*/

var clName=document.getElementsByClassName('toto')
console.log(clName)
/*
HTMLCollection []
length: 0
*/
console.log(clName.length==0)//true

/*********************************************** */

////Par Tag

//Récupere toutes les div , les div avec classes et ids asc et desc
console.log(document.getElementsByTagName('div'))
/*
HTMLCollection(7) [div.ParentPrecedent, div, div.cl, div.Parent, div.ParentSuivant, div, div.cl]
0: div.ParentPrecedent
1: div
2: div.cl
3: div.Parent
4: div.ParentSuivant
5: div
6: div.cl
length: 7
 */
/*********************************************** */

////Avec querySelector('selecteur CSS') 

//Renvoie la premier element ciblé.
console.log(document.querySelector('li'))
console.log(document.querySelector('ul a'))
console.log(document.querySelector('#childUl'))
console.log(document.querySelector('.cl'))
console.log("querySelector",document.querySelector('toto'))//null

/*********************************************** */

////Avec querySelectorAll('selecteur CSS') 

//Renvoie tous les elemnts ciblés sous
//forme de tableau NodeList
console.log(document.querySelectorAll('.cl'))
/**
NodeList(5) [div.cl, a.cl, li.cl, span.cl, div.cl]
0: div.cl
1: a.cl
2: li.cl
3: span.cl
4: div.cl
length: 5
 */
console.log(document.querySelectorAll('toto'))
/**
NodeList []
length: 0
 */

/*-------------Modifier contenu element-----------*/
var inner=document.querySelector('.inner')
/*
<div class="inner">
        Texte dans div.inner
        <span>text dans span</span>
        <div>Texte div.inner div</div>
        Texte dans div.inner
</div>
*/

/*
<div class="inner">saut de ligne
8 space Texte dans div.inner saut de ligne
8 space <span>text dans span</span>saut de lign
8 space <div>Texte div.inner div</div>saut de lign
8 space Texte dans div.inner
</div>
*/


console.log({inner})
console.log(inner.innerHTML)
/*
        Texte dans div.inner
        <span>text dans span</span>
        <div>Texte div.inner div</div>
        Texte dans div.inner
        */

console.log(inner.innerText)
/**
Texte dans div.inner text dans span
Texte div.inner div
Texte dans div.inner
 */

console.log(inner.textContent)
/*

        Texte dans div.inner
        text dans span
        Texte div.inner div
        Texte dans div.inner
        */

console.log(inner.children)
/**
HTMLCollection(2) [span, div]
0: span
1: div
 */

console.log(inner.childNodes)
/*
NodeList(5) [text, span, text, div, text]
0: text
1: span
2: text
3: div
4: text
length: 5
*/

var text=inner.childNodes[0]
console.log(text.nodeName)//#text
console.log(text.nodeValue)
/*

        Texte dans div.inner
        */
//"'saut'        Texte dans div.inner'saut'        "

//text.data , text.textContent renvoie la meme chose
console.log(text.length)//38
//texte=20 saut=2 espace=16 total=38

let div=document.querySelector('.inner').cloneNode(true)
var elmt=inner.childNodes[1]
console.log(elmt)
/*
 <span>text dans span</span>
*/
console.log({elmt})
//nodeName SPAN
//lovalName span
//innerText "text dans span"
//innerHTML "text dans span"
//elmt.childNodes[0].nodeVlue ou textContent "text dans span"

inner.innerHTML="Bonjour"
console.log(inner)
//<div class="inner">Bonjour</div>

inner.innerHTML="Bonjour      tout"
console.log(inner)
//<div class="inner">Bonjour      tout</div>


inner.innerHTML="Bonjour\n\ttout"
console.log(inner)
//<div class="inner">Bonjour
//    tout</div>

inner.innerHTML="<span>span</span>"
console.log(inner)
//<div class="inner"><span>span</span></div>

inner.innerText="Bonjour\n\ttout"
console.log(inner)
//<div class="inner">Bonjour
//	tout</div>

inner.textContent="Bonjour\n\ttout"
console.log(inner)
//<div class="inner">Bonjour
//	tout</div>

inner.innerText="<span>span</span>"
console.log(inner)
//<div class="inner">&lt;span&gt;span&lt;/span&gt;</div>
//affiche dans navigateur <span>span</span>

/*---------------Naviguer dans le DOM---------------*/

////parentNode renvoie tous les noeuds parents

//meme un noeud document alors que
//parentElement que des noeuds elements

//console.log(document.html.parentNode)//undefined
console.log(document.body.parentElement)//html
console.log(document.body.parentNode)//html
console.log(inner.parentNode)//body
//null si ne possede pas de parent

////childNodes

//Renvoie une list de noeuds enfants text et elemnts
console.log(div.childNodes)
/**
NodeList(5) [text, span, text, div, text]
0: text
1: span
2: text
3: div
4: text
length: 5
*/

////children uniquement lists elements enfants

console.log(div.children)
/*
HTMLCollection(2) [span, div]
0: span
1: div
length: 2
*/

////firstChild premier enfant direct text ou element ou null
console.log(div.firstChild)

////firstElementChild premier enfant direct element ou null
console.log(div.firstElementChild)

////lastChild dernier enfant direct text ou element ou null
console.log(div.lastChild)

////lastElementChild dernier enfant direct text ou element ou nul
console.log('lastElementChild',div.lastElementChild)
console.log(document.body.lastElementChild)

////Acceder au noeud frere precedent et suivant

//Noeud text et Element 

//Si premier noeud renvoie null
console.log(inner.previousSibling)

////Si dernier noeud renvoie null
console.log(inner.nextSibling)

//Noeud element

//Si premier noeud renvoie null
console.log(inner.previousElementSibling)

////Si dernier noeud renvoie null
console.log(inner.nextElementSibling)

/*---------------Créer et ajouter Noeud ds le DOM---------------*/
var cree=document.querySelector('.cree')
/*
<ul class="cree">
    <li>li1</li>
    <li>li2</li>
    <li>li3</li>
</ul>
*/

////createElement

let newP=document.createElement('p')
/*
<p></p>
N'existe pas dans le DOM
*/

////createTextNode
let newTxt=document.createTextNode("<span>Bonjour</span>")
console.log(newTxt)//"&lt;span&gt;Bonjour&lt;/span&gt;"


//Ajouter text dans p

//Efface tous les elemnts contenus dans p
//Et ajoute le texte
//newP.append(newTxt)
//console.log(newP)
/*
<p><span>Bonjour</span></p>
*/
//Dans le navigateur
//document.body.append(newP)
//<span>Bonjour</span>

//Efface tous les elemnts contenus dans p
//Et ajoute le texte
//newP.innerHTML="<span>span</span>"
//console.log(newP)
/*
<p><span>span</span></p>
*/
//Dans le navigateur
//document.body.append(newP)
//span

//Efface tous les elemnts contenus dans p
//Et ajoute le texte
newP.innerText="<span>span</span>"
console.log(newP)
/*
<p>&lt;span&gt;span&lt;/span&gt;</p>
*/
//Dans le navigateur
//document.body.append(newP)
//<span>span</span>

//Efface tous les elemnts contenus dans p
//Et ajoute le texte
//newP.textContent="<span>span</span>"
//console.log(newP)
/*
<p>&lt;span&gt;span&lt;/span&gt;</p>
*/
//Dans le navigateur
//document.body.append(newP)
//<span>span</span>

//Ajoutez le text comme premier enfant
//newP.prepend(newTxt)
// console.log(newP)
/**
<p>Bonjour&lt;span&gt;span&lt;/span&gt;</p>
 */
//Dans le navigateur
//document.body.append(newP)
//Bonjour<span>span</span>

////insertBefore
/**
 <ul class="cree">
    <li>li1</li>
    <li>li2</li>
    <li>li3</li>
</ul>
 */

//Inserer entre li1 et li2 une div

var d1=document.createElement('div')
d1.append("Bonjour")
//<div>Bonjour</div>

//Se positionner sur le deuxieme li
var li2=document.querySelector('.cree li:nth-child(2)')
//<li

//parentNode.insertBefore(newNode, referenceNode);
//si referenceNode est nuull newNode inserer a la fin
cree.insertBefore(d1,li2)

//cloner ici cree2 n'existe pas dans le DOM
var cree2=cree.cloneNode(true)
/**
<ul class="cree">
    <li>li1</li>
    <div>Bonjour</div><li>li2</li>
    <li>li3</li>
</ul>
 */

//parent.replaceChild(new,old)

//remplacer li2 par lien a
var a1=document.createElement('a')
a1.append('Lien')
cree.replaceChild(a1,li2)
/**
<ul class="cree">
    <li>li1</li>
    <div>Bonjour</div><a>Lien</a>
    <li>li3</li>
</ul>
 */

//Supprimer un noeud
//parent.RemoveChild(element)
cree.removeChild(a1)
/*
<ul class="cree">
    <li>li1</li>
    <div>Bonjour</div>
    <li>li3</li>
</ul>
*/

///Les attributs

//hasAttributes() true si atrribut sinon false
var h5=document.querySelector('h5')
var img=document.querySelector('img')
var a=document.querySelector('a')

console.log(h5.hasAttributes())//false

//noeud1.hasAttribute(nom attribut)
console.log(img.hasAttribute('src'))//true

//Liste des attributs
console.log(img.attributes)
/**
amedNodeMap {0: src, 1: alt, src: src, alt: alt, length: 2}
0: src
1: alt
length: 2
alt: alt
src: src
 */

console.log(img.attributes[0].value)//source

console.log(img.getAttributeNames())
//tableau ["src","alt"]

console.log(img.getAttribute('src'))//source

//Ajouter ou modifier un attribut

img.setAttribute('src','http://')
img.setAttribute('class','image')
img.setAttribute('data','disabled')

//Supprimer un attribut
img.removeAttribute('class')

//List de classe

/*
<a class="cl" href="">Lien enfant</a>
*/

console.log(a.classList)
/**
 DOMTokenList ["cl", value: "cl"]
0: "cl"
length: 1
value: "cl"
 */

console.log(a.classList.add('toto','gg','lolo'))
/**
OMTokenList ["cl", value: "cl"]
0: "cl"
1: "toto"
2: "gg"
3: "lolo"
length: 4
 */

console.log(a.classList.remove('toto','gg'))
/**
DOMTokenList ["cl", value: "cl"]
0: "cl"
1: "lolo"
length: 2
value: "cl lolo"
 */

a.classList.toggle('cl')
a.classList.toggle('cl')

console.log(a.classList.contains('cl'))//true

a.classList.replace('cl','clremplace')
DOMTokenList ["cl", value: "cl"]
/*
0: "lolo"
1: "clremplace"
length: 2
value: "lolo clremplace
*/
alert('Bienvenue sur le site'); /*pop-up*/

document.getElementById("btnMailto").innerHTML="Contact"; /*changement du texte sur le bouton*/

btnMailto.onclick=function(){/*changement du texte après avoir cliqué dessus*/
    document.getElementById("btnMailto").innerHTML="A très bientôt"; 
}
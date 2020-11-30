// initialisation des variables 
var hGrille = 500;
var lGrille = 500;
var vitX = 1;
var vitY = 1;
var hauteur = 50;
var largeur = 50;
var degres = 0;
// orientation = {N, E, W, S};
var nord = "N";
var ouest = "W";
var est = "E";
var sud = "S";
var posX = 5;
var posY = 5;
var direction ;
var intervalId;
var rotate = false;
// Initialisation de l'apirateur et du panneau d'affichage
var divs = document.querySelectorAll("div")
var affiche = divs[5];
var aspi = divs[4];
    aspi.style = "top:5px ; left:5px";

   // gestion des évènements lié aux claviers;
    window.onkeydown = (event)=>{
        var code = event.keyCode;
        switch(code){
            case 68: // touche D
                if(!rotate){
                    
                    rotate = true;
                    rotationD();
                }else{
                    rotationD();
                }
              break;  
            case 71: // touche G
                if(!rotate){
                    rotate = true;
                    rotationG();
                    
                }else{
                    rotationG();
                }
                
              break;    
            case 65: // touche A 
                var aspiT = parseFloat(aspi.style.top);
                var aspiB = aspiT + hauteur;
                var aspiL = parseFloat(aspi.style.left);
                var aspiR = aspiL + largeur;
                if(degres === 0 || degres === 360 || degres === -360){
                    if(aspiB + vitY <= 50){
                        vitY = 0;
                    }else{
                        vitY = 1;
                    }
                    direction = nord;
                    posY += vitY;
                    aspi.style.top = aspiT - vitY + "px";
                }
                
                if(degres === 90 || degres === 450 || degres === -270){
                    if(aspiL + vitX >= lGrille - 50){
                        vitX = 0;
                    }else{
                        vitX = 1;
                    }
                    direction = est
                    posX += vitX;
                    aspi.style.left = aspiL + vitX + "px";
                }
                
                if(degres === 180 || degres === 540 || degres === -180 || degres === -540){
                    if(aspiT + vitY >= hGrille - 60){
                        vitY = 0;
                    }else{
                        vitY = 1 ;
                    }
                    posY -= vitY
                    direction = sud;
                    aspi.style.top = aspiT + vitY + "px";
                }
                
                if(degres === 270 || degres === 630 || degres === -90 || degres === -450){
                    if(aspiR + vitX <= 50){
                        vitX = 0;
                    }else{
                        vitX = 1;
                    }
                    posX -= vitX;
                    direction = ouest;
                    aspi.style.left = aspiL - vitX + "px";
                }
            break;    
        }
        affichage();
    };
    // gestion des rotations
    var rotationD = ()=>{
        degres+=90;
        aspi.style.webkitTransform = 'rotate(' + degres + 'deg)';
        
    };
    var rotationG = ()=>{
        degres-=90;
        aspi.style.webkitTransform = 'rotate(' + degres + 'deg)';
    };

    // gestion de l'affichage
     var affichage = ()=>{
     var message = "position :" + " " + "x =" + " " + posX + " " + "y =" + " " + posY + " " + "orienté : " + " " + direction;

     affiche.innerHTML = message;
     };
document.addEventListener("keyup", function (event) {
    if (event.code == "KeyA") {
        document.getElementById("A").style.background = "white";

    }
    else if (event.code == "KeyS") {
        document.getElementById("S").style.background = "white";
    }
    else if (event.code == "KeyD") {
        document.getElementById("D").style.background = "white";
    }
    else if (event.code == "KeyF") {
       document.getElementById("F").style.background = "white";;
    }
    else if(event.code == "KeyG") {
       document.getElementById("G").style.background = "white";;
    }
    else if (event.code == "KeyH") {
       document.getElementById("H").style.background = "white";;
    }
    else if (event.code == "KeyJ") {
        document.getElementById("J").style.background = "white";
    }
    else if (event.code == "KeyW") {
        document.getElementById("W").style.background = "black";
    }
    else if (event.code == "KeyE") {
        document.getElementById("E").style.background = "black";
    }
    else if (event.code == "KeyT") {
        document.getElementById("T").style.background = "black";
    }
    else if (event.code == "KeyY") {
        document.getElementById("Y").style.background = "black";
    }else   (event.code == "KeyU")
    {
        document.getElementById("U").style.background = "black";
    }
});




document.addEventListener("keydown", function (event){
    if (event.code == "KeyA") {
        let audioA = new Audio("white_keys/A.mp3");
        audioA.play();
        document.getElementById("A").style.background="yellow";
    }
    else if (event.code == "KeyS") {
        let audioS = new Audio("white_keys/S.mp3");
        audioS.play();
        document.getElementById("S").style.background="yellow";
    }
    else if (event.code == "KeyD") {
        let audioD = new Audio("white_keys/D.mp3");
        audioD.play();
        document.getElementById("D").style.background="yellow";
    }
    else if (event.code == "KeyF") {
        let audioF = new Audio("white_keys/F.mp3");
        audioF.play();
        document.getElementById("F").style.background="yellow";
    }
    else if(event.code == "KeyG") {
        let audioG = new Audio("white_keys/G.mp3");
        audioG.play();
        document.getElementById("G").style.background="yellow";
    }
    else if (event.code == "KeyH") {
        let audioH = new Audio("white_keys/H.mp3");
        audioH.play();
        document.getElementById("H").style.background="yellow";
    }
    else if (event.code == "KeyJ") {
        let audioJ = new Audio("white_keys/J.mp3");
        audioJ.play();
        document.getElementById("J").style.background="yellow";
    }
    else if (event.code == "KeyW") {
        let audioW = new Audio("black_keys/W.mp3");
        audioW.play();
        document.getElementById("W").style.background="yellow";
    }
    else if (event.code == "KeyE") {
        let audioE = new Audio("black_keys/E.mp3");
        audioE.play();
        document.getElementById("E").style.background="yellow";
    }
    else if (event.code == "KeyT") {
        let audioT = new Audio("black_keys/T.mp3");
        audioT.play();
        document.getElementById("T").style.background="yellow";
    }
    else if (event.code == "KeyY") {
        let audioY = new Audio("black_keys/Y.mp3");
        audioY.play();
        document.getElementById("Y").style.background="yellow";
    }
    else if (event.code == "KeyU") {
        let audioU = new Audio("black_keys/U.mp3");
        audioU.play();
        document.getElementById("U").style.background="yellow";
    }
    }
)





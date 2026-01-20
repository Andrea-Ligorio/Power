document.querySelectorAll(".user_name").forEach(element => {element.innerText = "Andrea_Lig";});
document.getElementById("squat").innerText = "160";



var IPF = 25;
var gl = 45;
var total = 500;
var rank = total;
document.getElementById("rank").innerText = rank;
function setRank(value){
    switch(value){
        case "TOTAL":
            rank = total;
            break;
        case "IPF":
            rank = IPF;
            break;
        case "GL":
            rank = gl;
            break;
    }
    document.getElementById("rank").innerText = rank;
}






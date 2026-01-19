document.querySelectorAll(".user_name").forEach(element => {element.innerText = "Andrea_Lig";});
document.getElementById("squat").innerText = "160";

stat = getElementById("select_rank");


function showRank(value){
    IPF = 25;
    gl = 45;
    total = 500;

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



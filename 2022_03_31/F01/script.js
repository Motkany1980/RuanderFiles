let elem = document.getElementById("value1");
console.log(elem)
let number = 0;


elem.addEventListener("keyup", function () {
    if (elem.value == "") {
        number = 0;
    } else {
        number++;
        document.getElementById("karakterszam").innerHTML = number;

    }

})

function kirajzolo(){
    let X=document.querySelector("#firstInput").value;
    let Y=document.querySelector("#secondInput").value;
    console.log(`X: ${X} Y:${Y}`)

    document.getElementById("kocka").style.display = "block";
    document.getElementById("kocka").style.left = X;
    document.getElementById("kocka").style.top= Y;
}

function hide(){
    document.getElementById("kocka").style.display = "none";
}

let hideImage=document.getElementById("hidingCat")
console.log(hideImage.style.display)

function hides(){
    console.log(hideImage.style.display)
if(hideImage.style.display =="block"){
    hideImage.style.display=="none"
}else{
    hideImage.style.display=="block"
}
}
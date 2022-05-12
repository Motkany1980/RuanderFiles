elemMegjelenito.addEventListener("click",megjelenitendoElemLathatosag);
function megjelenitendoElemLathatosag(){
    let allapot=document.getElementById("megjelenitendoElem").style.display;
    let allapotok=document.getElementById("megjelenitendoElem").style.animationName;
    if(allapot!='block' || allapotok!='lenyilasAnimacio'){
        document.getElementById('megjelenitendoElem').style.display="block";
        document.getElementById('megjelenitendoElem').style.animationName="lenyilasAnimacio";
        document.getElementById("elemMegjelenito").innerHTML="van";
    }else{
        document.getElementById('megjelenitendoElem').style.display="none";
        document.getElementById('megjelenitendoElem').style.animationName="becsuk";
        document.getElementById("elemMegjelenito").innerHTML="nincs";
    }
}
const tej=0.2;
const tojas=2;
const cukor=1;

function szamol(){
    console.log("szamolok");
    let szemelyek=document.getElementById("reszt").value;
    console.log(" Résztvevők száma ."+szemelyek);

    let tejs=tej*szemelyek;
    let tojass=tojas*szemelyek;
    let cukors=cukor*szemelyek;

    let osszetevok="<br>Résztvevők száma:"+szemelyek+"<li>"+tejs+" l tej</li>"+tojass+" db tojás <li>"+cukors+"ek kristálycukor </li><br>";
    console.log(osszetevok)

    el = document.createElement('li');
    el.innerHTML = osszetevok;
    document.getElementById('sorozat').appendChild(el);
}
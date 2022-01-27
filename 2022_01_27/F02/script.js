console.log("Start");

function kisebb(szam1,szam2){
 if(szam1<szam2){
     return szam1
 }else{
     return szam2
 }
}

function nagyobb(szam1,szam2){
    if(szam1>szam2){
        return szam1
    }else{
        return szam2
    }
   }

   function RandomEgesz(alsoHatar,felsoHatart){
       let generatSzam=Math.round(Math.random()*(felsoHatart-alsoHatar))+alsoHatar;
       return generatSzam;
   }

function tombGenerator(meret,hatar1,hatar2){
    let generaltTomb=[];
    for (let i = 0; i < meret; i++) {
        generaltTomb.push(RandomEgesz(kisebb(hatar1,hatar2),nagyobb(hatar1,hatar2)));
    }
    console.log(generaltTomb)

return generaltTomb;
}

tomb=tombGenerator(6,1,6);
let seged=0;

for (let i = 0; i < tomb.length; i++) {
    if(tomb[i]%2==0){
        seged++;
    }
    
}
console.log("Páros számok mennyisége a tömbben: "+seged);
document.write("Tömb: "+tomb+"<br>")
document.write("Páros számok mennyisége a tömbben: "+seged)

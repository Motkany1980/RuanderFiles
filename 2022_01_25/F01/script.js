class Person {
    constructor(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }
    get firstname() {
        return this._firstname;
    }
    set firstname(name) {
        this._firstname = name;
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(name) {
        this._lastname = name;
    }
    connect(firstname, lastname) {
        return this._firstname + this._lastname;
    }
}

let szemely = new Person('Keszericze', 'István');

console.log(szemely.firstname, szemely.lastname);
console.log(szemely.connect());

// Intervallum
function IntervallumPrimGenerator(hatar1, hatar2) 
{
	let also;
    let felso;
    if(hatar1<hatar2)
    {
    	also=hatar1;
    	felso=hatar2;
    }
    else
    {
    	also=hatar2;
    	felso=hatar1;    
    }
	let megvan = false;
    let generaltSzam=0;
    while (megvan==false) 
    {
        generaltSzam = RandomEgesz(also, felso);
        let oszto = 0;
        for (let i = 1; i <= generaltSzam; i++) {
            if (generaltSzam % i == 0) 
            {
                oszto++;
            }
        }
        if (oszto == 2) {
            megvan = true
        } else {}
    }
    return generaltSzam;
}

// intervallumPrimGenerator(Darabolt)
function RandomEgesz(alsoHatar, felsoHatar){
	let generaltSzam=Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
	return generaltSzam;
}
function RandomEgesz100(){
	let generaltSzam=Math.round(Math.random()*100);
	return generaltSzam;
}
function Kisebb(szam1,szam2){
    if(szam1<szam2){
    	return szam1;
    }
    else{
    	return szam2;
    }
}
function Nagyobb(szam1,szam2){
    if(szam1>szam2){
    	return szam1;
    }
    else{
    	return szam2;
    }
}
function OsztoSzamlalo(vizsgaltSzam){
		let oszto = 0;
        for (let i = 1; i <= vizsgaltSzam; i++) {
            if (vizsgaltSzam % i == 0){
                oszto++;
            }
        }
        return oszto;
}
function PrimE(osztokSzam){
		if (osztokSzam == 2) {
             return true
        } 
        else {
        	return false;
        }
}
function IntervallumPrimGenerator(hatar1, hatar2){
	
	let megvan = false;
    let generaltSzam=0;
    while (megvan==false){
    	//generaltSzam = RandomEgesz100();
        generaltSzam = RandomEgesz(Kisebb(hatar1,hatar2), Nagyobb(hatar1,hatar2));
        let osztoMennyiseg=OsztoSzamlalo(generaltSzam);  
        megvan=PrimE(osztoMennyiseg);
    }
    return generaltSzam;
}
document.write(IntervallumPrimGenerator(1,100));
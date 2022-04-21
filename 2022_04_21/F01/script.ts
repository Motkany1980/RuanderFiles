// tsc --watch
console.log("Start 04.21.");

// Visszatérési érték és paraméter nélküli eljárás
function IloveTypeScript():void{
    document.write("Gépelek valamit");
}
IloveTypeScript();

// Visszatérési érték nélküli és paraméteres eljárás
function NegyzetKeruletTeruletEljaras(a:number):void {
    let kerulet=4*a;
    let terulet=a*a;
    document.write(`Kerület és terület`);
    document.write(`<br> - Kerület ${kerulet}`);
    document.write(`<br> - Terulet ${terulet}`);
}
NegyzetKeruletTeruletEljaras(2);

// Visszatérési értékes és paraméter nélküli függvény
function RandomGeneraloFuggveny():number {
  return Math.round(Math.random()*100);
}
document.write(`<br> - Random number ${RandomGeneraloFuggveny()}`)

// Visszatérési értékes és paraméteres függvény
function NegyzetKeruletFuggveny(a:number):number {
    return a*4;
}
document.write(`<br> - Kerület ${NegyzetKeruletFuggveny(3)}`)

// Téglalap terület
function TeglalapKeruletTeruletEljaras(a:number,b:number):void {
    let kerulet=2*(a+b);
    let terulet=a*b;
    document.write(`Kerület és terület`);
    document.write(`<br> - Téglalap Kerület ${kerulet}`);
    document.write(`<br> - Téglalap Terulet ${terulet}`);
}
TeglalapKeruletTeruletEljaras(2,3);


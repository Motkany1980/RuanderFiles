// let x = Math.random();
// let y = Math.random();
// let x = Math.round(Math.random()) * 2 - 1;
// let y = Math.round(Math.random()) * 2 - 1;
let x =  Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1);
let y =  Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1);

console.log("X:" + x);
console.log("Y:" + y);

if (x > 0) {
    if (y > 0) {
        console.log("1:negyed");
    } else {
        console.log("4:negyed");

    }
} else {
    
    if (y > 0) {
        console.log("2:negyed");

    } else {
        console.log("3:negyed");

    }
}
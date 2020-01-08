var isGlobal = "Global Value";

if(true){
    var isLocal = "Local value";
    isGlobal = "Global value updated";

    console.log(isGlobal);
    console.log(isLocal);
}

console.log("Ouside if block: "+isGlobal);
console.log("Ouside if block: " + isLocal); 
//this local variable will also print,if we use var locally.
//but this is not legal.local variable should not print outside a block
//so,better practice is to use 'let' keyword locally instead of 'var'

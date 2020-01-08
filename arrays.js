const superHeroes =['Ironman','Thor','Captain America','Doctor Strange'];

console.log(superHeroes);
console.log(superHeroes.length);
console.log(`We have ${superHeroes.length} superheroes`); //backqoute ``

//=============change the value
console.log("=========+++++++++++++===========");
superHeroes[2] = "Something";
console.log(superHeroes);

//=============shift value one index left
console.log("=========+++++++++===========");
superHeroes.shift();
console.log(superHeroes);

//=============insert value at first position
console.log("=========+++++++++===========");
superHeroes.unshift("first");
console.log(superHeroes);

//=============push() added value, pop() delete
console.log("=========+++++++++===========");
superHeroes.push("Hulk");
console.log(superHeroes);

//=============splice(start position,how many numbers to be deleted,value)
console.log("=========+++++++++===========");
superHeroes.splice(2,2,"Mr.Chowdhury");
console.log(superHeroes);
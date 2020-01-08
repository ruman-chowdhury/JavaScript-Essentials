//two ways creating object

var myCar = new Object();
myCar.maxSpeed = 40;
myCar.driver ="John Doe";
myCar.message = function(){
    console.log("Hello, this is John");
    
}

console.log(myCar.driver);
console.log(myCar.message());

//======another way
var myCar2 = {
    'carModel': 'Marcedes',
    'carSpeed': 60,
    'carColor': 'Black',
    'message': function(speed,time){
        console.log(speed*time); //can be declared a function 
    }
}

console.log(myCar2.carModel);
console.log(myCar2.carColor);
console.log(myCar2.message(40,10));

//=========using this keyword
var myCar3 = {
    'carModel': 'BMW',
    'carSpeed': 60,
    'carColor': 'Red',
    'message': function (time) {
        console.log(this.carSpeed*time); //this refers property of a object
    }
}

console.log(myCar3.carModel);
console.log(myCar3.message(10));




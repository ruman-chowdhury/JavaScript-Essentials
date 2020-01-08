//======constructor method/function
//Car is class, function(){} body without name is constructor
//Constructor function rules: function name capitalized,passing parameter
var Car = function(model,driver){
   this.model = model;
   this.driver = driver;

   this.carSpeed = function(speed,time){
        console.log(speed*time);
   }
}

var myCar = new Car('BMW', 'John Doe'); //constructor method and passing data to it
var myCar2 = new Car('Tata', 'Mr. Robert');
var myCar3 = new Car('Marcedes', 'Shaun paul');

console.log(myCar2); //display 'myCar2' object property
console.log(myCar3);

myCar2.carSpeed(40,10);
myCar3.carSpeed(60,10);

//===============declaring function in two ways===========
//========normal function/method
function getAverage(a,b){
   var avg = (a+b)/2;
    console.log(avg);
}
getAverage(4,6);


//===============constructor,where fullName is a class,function(){} body is constructor
var fullName = function(firstName,lastName){
   console.log(`Happy to have you ${firstName} ${lastName}`);
}
fullName('Ruman','Chowdhury');


//================return
var surName = function (name = "unName") {
    return name;
}
let result = surName('John Doe');
console.log(result);
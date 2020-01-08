const days = ['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];

//callback function in forEach loop,dayName is each element of array
days.forEach(function(dayName,index){
    console.log(`Day number ${index+1} --${dayName}`);
})
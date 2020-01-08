var myResult = function(currentMarks,totalMarks){
    var percentage = (currentMarks/totalMarks)*100;
    
    var grade = '';
    if(percentage >= 90){
        grade = 'A+';
    }else if(percentage >= 80){
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'B-';
    } else if (percentage >= 50) {
        grade = 'C';
    } else if (percentage >= 40) {
        grade = 'D';
    }else{
        grade = 'fail';
    }

    return 'Grade:'+grade +' Percentage:'+percentage;
}

var result = myResult(85,100);
console.log(result);

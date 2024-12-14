function grade(averageGrade) {
    let message;
    if(averageGrade < 60){
        message = 'Unsatisfactorily';
    }
    else if (averageGrade >= 60 && averageGrade <= 70){
        message = 'Satisfactorily';
    }
    else if (averageGrade >= 71 && averageGrade <= 80){
        message = 'Good';
    }
    else if (averageGrade >= 81 && averageGrade <= 90){
        message = 'Very Good';
    }
    else if (averageGrade >= 91 && averageGrade <= 100){
        message = 'Excellent';
    }
    else{
        message = 'No grade found';
    }
    return message;
}

console.log(grade(45));
console.log(grade(67));
console.log(grade(80));
console.log(grade(99));
console.log(grade(110));
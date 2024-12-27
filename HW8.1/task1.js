function checkArr(numbers){
    let positiveCount = 0; 
    let negativeCount = 0;
    let zeroCount = 0;
    for(let i = 0; i < numbers.length; i++)
    {
        if(numbers[i] == 0)
        {
            zeroCount++;
        }
        else if(numbers[i] < 0)
        {
            negativeCount++;
        }
        else
        {
            positiveCount++;
        }
    }
    
    console.log("Number of positive numbers: ", positiveCount);
    console.log("Number of negative numbers: ", negativeCount);
    console.log("Number of zero value numbers: ", zeroCount);
}

const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
checkArr(numbers);
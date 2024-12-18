function isAdult(age)
{
    let isAdult = false;
    if(age >= 18){isAdult = true;}
    return isAdult;
}

console.log("Adult:", isAdult(25));
console.log("Adult:", isAdult(15));
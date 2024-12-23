const divide = function(numerator, denominator)
{
    if(denominator === 0)
    {
        throw new Error("Denumerator is 0");
    }
    else if(typeof numerator !== "number" || typeof denominator !== "number")
    {
        throw new Error("One argument is not a number");
    }
    return numerator/denominator;
}

const tryFunc = function(callbackFunc, ...args) {
    try 
    {
        console.log(callbackFunc(...args));
    } 
    catch (error) 
    {
        console.error(`Division is impossible for ${args[0]} / ${args[1]}:`, error.message);
    } 
    finally 
    {
        console.log("Task is done");
    }
};

tryFunc(divide, 10, 0);
tryFunc(divide, "10", 2);
tryFunc(divide, 15, 3);

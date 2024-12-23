const handleOdd = (n) => 
{
    console.log(`The number ${n} is an odd number`)
}

const handleEven = (n) => 
{
    console.log(`The number ${n} is an even number`)
}

  let handleNum = (num,callbackOdd, callbackEven) => {

    if(num % 2 !== 0)
    {
        callbackOdd(num);
    }
    else
    {
        callbackEven(num);
    }

  }
  
  handleNum(3,handleOdd,handleEven); 
  handleNum(12,handleOdd,handleEven); 
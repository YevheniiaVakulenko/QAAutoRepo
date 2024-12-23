function counter(n)
{
  console.log(n);
  if (n <= 0){
    return;
  }
  counter(n - 1);
}
  
counter(5);
const numbersList = [1,10,14,2,4,5,43,34];
const arrToSort = numbersList.slice();

arrToSort.sort((a, b) => a - b);

console.log(numbersList);
console.log(arrToSort);

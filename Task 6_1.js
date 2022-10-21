let arr = [1, 2,3, 4, 5, "string", 0];
let a = 0;
let b = 0;
let c = 0;
let d = 0;
function getType(){
  for(let i=0; i < arr.length; i++){
    if (arr[i] % 2 == 0 && arr[i] !== 0){
        a = a + 1;
      } else if(arr[i] % 2 == 1){
      b = b + 1;
      } else if (arr[i] === 0){
      c = c + 1;
      } else{
      d = d + 1;
      }
  }
  console.log (`Четных чисел в массиве - ${a}`);
  console.log (`Нечетных чисел в массиве - ${b}`);
  console.log (`Значений равных 0 в массиве - ${c}`);
  console.log (`Значений остальных типов в массиве - ${d}`);
}
getType();
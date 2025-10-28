** start of script.js **

function findElement(arr,func){
  for(let i=0;i<arr.length;i++){
    let element=arr[i];
    if(func(element)){
      return element;
    }
  }
  return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))

console.log(findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; }))

** end of script.js **


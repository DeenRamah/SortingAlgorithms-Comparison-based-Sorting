function ins(arr:number[]): number[]{
  for(let i=1; i<arr.length; i++){
    let key = arr[i];
    let j=i-1;
    while (j>= 0 && arr[j]> key){
      arr[j+1]= arr[j];
    }
    arr[j+1] = key;
  }
  return arr;
}
console.log(ins([12,11,12,5,6]));

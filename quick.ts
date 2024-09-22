function qui(arr:number[]): number[]{
  if(arr.length <=1){
    retrun arr;
  }

  const pivot = arr[arr.length -1];
  const left = arr.filter((el) => el <pivot);
  const rigth = arr.filter((el) => el > pivot);
  return[...qui(left), pivot, ...qui(rigth)];
}

console.log(qui([10,7,8,9,1,5]));

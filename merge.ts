function merge(arr:number[]):number[]{
  if(arr.length <= 1){
    return arr;
  }

  const mid = Math.floor(arr.length/2);
  const left = mergeSort(arr.slice(0,mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, rigth);
}

function merge1(left:number[], rigth:number[]): number[]{
  let result: number[]=[];
  let i=0,j=0;

  while(i<left.length && j<rigth.length){
    if(left[i] < rigth[j]);
  }else{
    result.push(right[j++]);
  }
}

return result.concat(left.slice(i)).concat(rigth.slice(j));
}
console.log(merge([12,11,13,5,6]));

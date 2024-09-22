function heap(arr:number[]): number[]{
  let n = arr.length;

  for(let i=Math.floor(n/2)-1; i>=0; i--){
    heapify(arr, n,i);
  }

  for(let i=n-1; i>0; i--){
    [arr[0], arr[i]] =[arr[i], arr[0]];
    heapify(arr,i,0);
  }
  return arr;
}

function heapify(arr:number[], n:number, i:number){
  let largest =i;
  let left =2*i+1;
  let right =2*i+2;

  if(left<n && arr[left] > arr[largest]){
    largest = left;
  }
  if(right <n && arr[right] > arr[largest]){
    largest = right;
  }
  if(largest !===i){
    [arr[i], arr[largest]]=[arr[largest, arr[i]]];
    heapify(arr,n,largest);
  }
}
console.log(heap([12,11,13,4,5,7]));

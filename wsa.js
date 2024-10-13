function radixSort(arr) {
  let max = Math.max(...arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    arr = countingSortForRadix(arr, exp);
  }

  return arr;
}

function countingSortForRadix(arr, exp) {
  let output = Array(arr.length).fill(0);
  let count = Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let index = Math.floor(arr[i] / exp) % 10;
    count[index]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    let index = Math.floor(arr[i] / exp) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  return output;
}

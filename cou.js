function countingSort(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let range = max - min + 1;
  let count = Array(range).fill(0);
  let output = Array(arr.length).fill(0);

  // Store count of each element
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  // Modify count array to get the position of elements
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  return output;
}

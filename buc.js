function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) {
    return arr;
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let bucketCount = Math.floor((max - min) / bucketSize) + 1;
  let buckets = Array.from({ length: bucketCount }, () => []);

  // Distribute elements into buckets
  for (let i = 0; i < arr.length; i++) {
    let bucketIndex = Math.floor((arr[i] - min) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
  }

  // Sort individual buckets and concatenate
  arr = [];
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b); // Use any sorting algorithm (here, built-in sort)
    arr = arr.concat(buckets[i]);
  }

  return arr;
}

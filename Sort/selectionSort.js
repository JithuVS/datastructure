function selectionSort(arr) {
  const swap = (arr, ind1, ind2) => {
    return ([arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]);
  };

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

console.log(selectionSort([3, 4, 1, 6, 9, 34, 99]));

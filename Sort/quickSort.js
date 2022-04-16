function pivot(arr, start = 0, end = arr.length + 1) {

    function swap(arr, i, j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    var pivot = arr[start];
    var swapIdx = start;

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {

        let pivotIndex = pivot(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);

        quickSort(arr, pivotIndex + 1, right)

    }
    return arr;
}

let results = quickSort([4,6,9,1,2,5,3])
console.log(results);
function insertionsort(arr) {
    let k;
    let temp;
    let n = arr.length;

    for(let i = 1; i < n; i++){
        temp = arr[i];
        k = i - 1;

        while(k>=0 && arr[k] > temp) {
            arr[k+1] = arr[k];
            k = k - 1;
        }
        arr[k + 1] = temp;
    }

    return arr;
}

let resArr = insertionsort([3,2,1,4,66,6]);
console.log(resArr);
function getDigit(num, i) {
    return Math.floor(Math.abs(num)/ Math.pow(10,i))%10;
}


function digiCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}


function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i< nums.length; i++){
        maxDigits = Math.max(maxDigits, digiCount(nums[i]));
    }
    return maxDigits;
}


function rsort(nums){
    let maxdigitcount = mostDigits(nums);
    for(let k = 0; k < maxdigitcount; k++){
        let digitBuckets = Array.from({length: 10},()=>[]);

        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}


let results = rsort([456,12,999,1,0,55,777,1]);
console.log(results);
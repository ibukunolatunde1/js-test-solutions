function mySort(myNums) {
    let nums = myNums;
    nums.forEach((num) => {
    if(typeof num !== 'number'){
      nums.splice(nums.indexOf(num), 1);
    }
  });
  nums = nums.map(Math.floor)
             .sort((a,b) => a - b)
             .sort((a,b) => (b % 2 - a % 2));

  return nums;
}

console.log(mySort([90, 45, 66, 'bye', 100.5]));
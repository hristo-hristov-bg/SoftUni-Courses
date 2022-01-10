function condenseArrToNum(nums) {
 
    while (nums.length > 1) {
        let condensed = [nums.length - 1];  
    
        for ( i = 0; i < nums.length - 1; i++) {
            condensed[i] = nums[i] + nums[i + 1];
        }
    
        nums = condensed;
    }
    console.log(Number(nums));
}

//condenseArrToNum([2, 10, 3]);
condenseArrToNum([5,0,4,1,2]);

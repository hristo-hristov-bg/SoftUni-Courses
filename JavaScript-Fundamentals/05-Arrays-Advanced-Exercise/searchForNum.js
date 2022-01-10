function searchForNum(arr1, arr2) {
    let newArr = arr1.splice(0,arr2[0]);
    let deletedNums = newArr.slice(arr2[1]);
    
    let count = 0;
    for (let num of deletedNums) {
        if (num === arr2[2]) {
            count ++;
        }
    }
    console.log(`Number ${arr2[2]} occurs ${count} times.`);
}

searchForNum([5, 2, 3, 4, 1, 6],
[5, 2, 3]
);
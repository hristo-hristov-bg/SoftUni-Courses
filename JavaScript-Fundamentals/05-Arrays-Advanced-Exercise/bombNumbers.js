function bombNumbers(arr1, arr2) {

    let bombNum = arr2[0];
    let powerNum = arr2[1];
    let result = 0;

    for (let i = 0; i < arr1.length; i++) {
        let currentNum = arr1[i];
        if (bombNum === currentNum) {
            arr1.splice(i - powerNum, (powerNum * 2) + 1);
            i = -1;
        }
    }

    for (let num of arr1) {
        result += num;
    }

    console.log(result);

}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]   
)
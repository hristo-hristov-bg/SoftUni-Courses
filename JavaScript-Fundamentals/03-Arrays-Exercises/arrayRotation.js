function arrayRotation(arr, num) {
    let newArr = [];

    for (let i = 0; i < num; i++) {

        for (let j = 0; j < arr.length - 1; j++) {
            newArr[j] = arr[j + 1];

        }
        newArr.push(arr[0])
        arr = newArr;
        newArr = [];
    }

    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
function reverseArrOfNums(n, arr) {
    let arr2 = [];

    for (let i = n - 1; i >= 0; i--) {
        arr2.push(arr[i]);
    }
    console.log(arr2.join(' '));
}

reverseArrOfNums(3, [10, 20, 30, 40, 50]);
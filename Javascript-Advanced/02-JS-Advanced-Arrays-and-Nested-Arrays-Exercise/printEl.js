function printEl(arr, n) {

    let result = [];

    for (let i = 0; i < arr.length; i += n) {
        result.push(arr[i]);
    }

    return result;
}

console.log(printEl(['1',
    '2',
    '3',
    '4',
    '5'],
    6

));
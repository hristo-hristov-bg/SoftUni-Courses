function reverseArrOfStrings(arr) {

        for (let i = 0; i < (arr.length - 1) / 2; i++) {
            let k = (arr.length - 1) - i;
            let temp = arr[i];
            arr[i] = arr[k];
            arr[k] = temp;
        }

        console.log(arr.join(' '));
}

reverseArrOfStrings(['a', 'b', 'c', 'd', 'e']);
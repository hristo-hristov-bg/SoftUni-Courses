function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let numAsString = arr[i].toString();
        let mirroredNum = '';

        for (let j = numAsString.length -1; j >= 0; j--) {
            mirroredNum += numAsString[j];
        }

        if (numAsString == mirroredNum) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

palindromeIntegers([32,2,232,1010]);
function sameNums(input) {
    let myNum = input.toString();
    let currentDigit = myNum[0];
    let count = 0;
    let sum = 0;

    for (let i = 0; i < myNum.length; i++) {
        if (currentDigit == myNum[i]) {
            count ++;
            continue;
        } else {
            console.log('false');
            count = 0;
            break;
        }
    }
    if (count > 0) {
        console.log('true');
    }

    for (let i = 0; i < myNum.length; i ++) {
        sum += Number(myNum[i]);
    }
    console.log(sum);
}

//sameNums(2222222);
sameNums(2224);
function nXNMatrix(num) {

    for (let i = 0; i < num; i++) {
        let repeatingNum = '';
        for (let j = 0; j < num; j++) {
            repeatingNum += num + ' ';
        }
        console.log(repeatingNum)
    }
}

nXNMatrix(7);
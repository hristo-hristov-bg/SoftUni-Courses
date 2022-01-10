function train(arr) {
    let newArr = arr
        .shift()
        .split(' ')
        .map(Number);

    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        let action = command[0];
        let num = Number(command[1]);

        if (command.length > 1) {
            newArr.push(num);
        } else {
            num = Number(command[0]);
            let sum = 0;
            for (let j = 0; j < newArr.length; j++) {
                sum = num + Number(newArr[j]);
                if (sum <= maxCapacity) {
                    newArr[j] = sum;
                    break;
                }
            }

        }
    }
    console.log(newArr.join(' '));
}

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
);
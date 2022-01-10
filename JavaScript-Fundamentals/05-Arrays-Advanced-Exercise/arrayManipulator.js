function arrayManipulator(arr, commands) {
    let result = [];
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(' ');
        if (command[0] === 'add') {
            arr.splice(command[1], 0, Number(command[2]));
        } else if (command[0] === 'addMany') {
            for (let j = command.length - 1; j >= 2 ; j--) {
                arr.splice(command[1], 0, Number(command[j]));
            }
        } else if (command[0] === 'contains') {
            let contains = arr.indexOf(Number(command[1]));
            console.log(contains);
        } else if (command[0] === 'remove') {
            arr.splice(command[1], 1);
        } else if (command[0] === 'shift') {
            for (let k = 0; k < command[1]; k++) {
                let a = arr.shift();
                arr.push(a);
            }
        } else if (command[0] === 'sumPairs') {
            while (arr.length > 0) {
                let a = arr.shift();
                let b = arr.shift();
                result.push(a + b);
            }
        } else if (command[0] === 'print') {
            console.log(result);
            break;
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
);

// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
// );
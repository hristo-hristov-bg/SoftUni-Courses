function houseParty(arr) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(' ');
        let name = current.shift();
        let action = current.join(' ');


        for (let j = i + 1; j < arr.length; j++) {
            nextString = arr[j].split(' ');
            let nextName = nextString.shift();
            let nextAction = nextString.join(' ');
            if (name === nextName) {
                if (action == 'is going!' && nextAction == 'is going!') {
                    arr.splice(j, 1);
                    console.log(`${name} is already in the list!`)
                }
            }
        }

        if (action == 'is going!' && list.includes(name)) {
            let indexToDelete = list.indexOf(name);
            list.splice(indexToDelete, 1);
        }
        if (action == 'is going!') {
            list.push(name);
        }
        if (action == 'is not going!' && !list.includes(name)) {
            console.log(`${name} is not in the list!`)
        }
        if (action == 'is not going!' && list.includes(name)) {
            let indexToDelete = list.indexOf(name);
            list.splice(indexToDelete, 1);
        }
    }
    console.log(list.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);
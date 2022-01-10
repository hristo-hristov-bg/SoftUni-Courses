function piccolo(list) {
    let result = [];

    for (let element of list) {
        let currentCommand = element.split(', ');
        let command = currentCommand[0];
        let regNumber = currentCommand[1];
        if (command === 'IN') {
            if (!result.includes(regNumber)) {
                result.push(regNumber); 
            }
        } else if (command === 'OUT') {
            if (result.includes(regNumber)) {
                let index = result.indexOf(regNumber)
                result.splice(index, 1);
            }
        }
    }

    let sortedResult = result.sort((a, b) => a.localeCompare(b));
    if (result.length < 1) {
        console.log('Parking Lot is Empty');
    } else {
        console.log(sortedResult.join('\n'));
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);
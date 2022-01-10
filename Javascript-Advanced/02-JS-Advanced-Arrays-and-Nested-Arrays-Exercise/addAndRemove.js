function addAndRemove(arr) {
    let num = 1;
    let result = [];

    arr.forEach(element => {
        if (element == 'add') {
            result.push(num);
        } else {
            result.pop();
        }

        num++;
    });

    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }

}

addAndRemove(['remove',
    'remove',
    'remove']

)
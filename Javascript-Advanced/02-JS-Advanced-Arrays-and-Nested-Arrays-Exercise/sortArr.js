function sortArr(arr) {

    let sortedByAlph = arr.sort((a, b) => a.localeCompare(b));
    let sorted = sortedByAlph.sort((a, b) => a.length - b.length);

    console.log(sorted.join('\n'))
}

sortArr(['alpha',
    'beta',
    'gamma']
)

console.log('-----------')

sortArr(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
)

console.log('------------')

sortArr(['test',
    'Deny',
    'omen',
    'Default']
)
function convertToJSON(name, lastName, hairColor) {
    let obj = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    };

    console.log(JSON.stringify(obj));
}

convertToJSON('George',
    'Jones',
    'Brown'
);
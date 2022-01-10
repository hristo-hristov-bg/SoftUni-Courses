function convertToObject(list) {
    let obj = Object.entries(JSON.parse(list));
    
    for (let [key, value] of obj) {
        console.log(`${key}: ${value}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
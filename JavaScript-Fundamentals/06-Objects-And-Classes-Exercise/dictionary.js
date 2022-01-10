function dictionary(list) {
    let convertedList = [];
    for (let element of list) {
        let parsedList = JSON.parse(element);
        let term = Object.keys(parsedList).toString();
        let definition = Object.values(parsedList).toString();

        let dictionaryObj = {
            term,
            definition 
        }

        for (let currentTerm of convertedList) {
            if (currentTerm.term === dictionaryObj.term) {
                currentTerm.definition = dictionaryObj.definition;
            }
        }
        convertedList.push(dictionaryObj);
    }
    
    convertedList.sort((a, b) => a.term.localeCompare(b.term))
    for (let dictionary of convertedList) {
        console.log(`Term: ${dictionary.term} => Definition: ${dictionary.definition}`)
    }
    
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);
function wordOccurrences(arr) {

    let map = new Map();
    

    for (let word of arr) {
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(map.set(word, map.get(word) + 1))
        }
        
    }
    console.log(map)
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);

    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
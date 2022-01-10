function wordsTracker (input) {
    let words = input.shift().split(' ');
    let countedWords = {};

    for (let currentWord of words) {
        countedWords[currentWord] = 0;
        for (let checkedWord of input) {
            if (currentWord === checkedWord) {
                countedWords[currentWord] += 1;
            }
        }
    }
    
    let sortedWords = Object.entries(countedWords).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sortedWords) {
        console.log(`${key} - ${value}`);
    }
}

wordsTracker([
    'this sentence', 
    'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]);